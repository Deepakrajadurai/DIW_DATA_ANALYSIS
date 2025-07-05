import React from 'react';
import type { RelationshipGraphData } from '../types';

interface RelationshipGraphProps {
    graph: RelationshipGraphData;
}

const wrapText = (text: string, maxCharsPerLine: number): string[] => {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    words.forEach(word => {
        if ((currentLine + word).length > maxCharsPerLine) {
            lines.push(currentLine.trim());
            currentLine = word + ' ';
        } else {
            currentLine += word + ' ';
        }
    });
    lines.push(currentLine.trim());
    return lines;
};

export const RelationshipGraph: React.FC<RelationshipGraphProps> = ({ graph }) => {
    const { nodes, edges } = graph;
    const width = 500;
    const height = 400;
    const center = { x: width / 2, y: height / 2 };
    const radius = Math.min(width, height) / 2 - 60; // Leave space for labels
    const nodeRadius = 10;

    const nodePositions: { [key: string]: { x: number; y: number } } = {};
    const angleStep = (2 * Math.PI) / nodes.length;

    nodes.forEach((node, i) => {
        const angle = i * angleStep - Math.PI / 2; // Start from top
        nodePositions[node.id] = {
            x: center.x + radius * Math.cos(angle),
            y: center.y + radius * Math.sin(angle),
        };
    });

    return (
        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 w-full h-full min-h-[400px]">
            <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%" style={{ overflow: 'visible' }}>
                <defs>
                    <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="7"
                        refX="9"
                        refY="3.5"
                        orient="auto"
                        fill="#60a5fa" /* blue-400 */
                    >
                        <polygon points="0 0, 10 3.5, 0 7" />
                    </marker>
                </defs>

                {/* Edges and Edge Labels */}
                {edges.map((edge, i) => {
                    const sourcePos = nodePositions[edge.source];
                    const targetPos = nodePositions[edge.target];

                    if (!sourcePos || !targetPos) return null;

                    const pathId = `edgepath-${i}`;

                    // Path for the text to follow
                    return (
                        <g key={i} className="edge">
                            <path
                                id={pathId}
                                d={`M${sourcePos.x},${sourcePos.y} L${targetPos.x},${targetPos.y}`}
                                fill="none"
                                stroke="#4b5563" /* gray-600 */
                                strokeWidth="1.5"
                                markerEnd="url(#arrowhead)"
                            />
                            <text dy="-5" textAnchor="middle" fill="#9ca3af" /* gray-400 */ fontSize="10px" style={{ letterSpacing: '0.05em' }}>
                                <textPath href={`#${pathId}`} startOffset="50%">
                                    {edge.label}
                                </textPath>
                            </text>
                        </g>
                    );
                })}

                {/* Nodes and Node Labels */}
                {nodes.map(node => {
                    const pos = nodePositions[node.id];
                    const labelLines = wrapText(node.title, 20); // Wrap title if too long

                    return (
                        <g key={node.id} transform={`translate(${pos.x}, ${pos.y})`} className="node">
                            <circle r={nodeRadius} fill="#2563eb" /* blue-600 */ stroke="#93c5fd" /* blue-300 */ strokeWidth="2" />
                            <text
                                y={-nodeRadius - 5}
                                textAnchor="middle"
                                fill="#e5e7eb" /* gray-200 */
                                fontSize="11px"
                                fontWeight="bold"
                                style={{ pointerEvents: 'none' }}
                            >
                                {labelLines.map((line, index) => (
                                    <tspan key={index} x="0" dy={index > 0 ? "1.2em" : 0}>{line}</tspan>
                                ))}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
};
