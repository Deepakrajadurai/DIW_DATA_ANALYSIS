
export type ReportTopicId = string;

export interface ReportTopic {
  id: ReportTopicId;
  title: string;
  icon: React.ReactNode;
}

export interface ChartDataPoint {
  name: string;
  [key: string]: string | number;
}

export interface ChartConfig {
    type: 'bar' | 'line' | 'pie';
    data: ChartDataPoint[];
    dataKeys: { key: string; color: string; stackId?: string; name?: string }[];
    title: string;
    description: string;
    xAxisKey: string;
}

export interface ReportData {
  id: ReportTopicId;
  title: string;
  summary: string;
  keyFindings: string[];
  charts: ChartConfig[];
  fullText: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export interface GraphNode {
  id: string; // Corresponds to ReportData id
  title: string;
}

export interface GraphEdge {
  source: string; // id of source node
  target: string; // id of target node
  label: string; // The connection explanation
}

export interface RelationshipGraphData {
    nodes: GraphNode[];
    edges: GraphEdge[];
}

export interface StoryboardData {
  narrative: string;
  charts: ChartConfig[];
  introspection: string;
  retrospection: string;
  relationshipGraph: RelationshipGraphData;
}
