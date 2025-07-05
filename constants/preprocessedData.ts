
import type { ReportData } from '../types';

export const PREPROCESSED_DATA: ReportData[] = [
    {
        id: 'construction',
        title: 'Decline in Nominal Construction Volume',
        summary: 'For the first time since the financial crisis, Germany\'s nominal construction volume is expected to decline by 3.5% due to falling construction prices and worsened financing conditions. The residential construction sector is particularly hard-hit, while civil engineering cushions the downturn.',
        keyFindings: [
            "Nominal construction volume to decline by 3.5% in 2024.",
            "Real change in total construction is projected at -1.5% for 2024.",
            "Residential construction sees a marked decline (-3.4% real change in 2024).",
            "Civil engineering shows resilience with projected growth (3.6% real change in 2024).",
            "The national goal of constructing 400,000 residences per year is becoming increasingly out of reach."
        ],
        charts: [
            {
                type: 'bar',
                title: 'Real Change in Construction Volume (%) vs. Previous Year',
                description: 'This chart illustrates the projected percentage change in real construction volume for different sectors, comparing 2023, 2024, and 2025.',
                xAxisKey: 'name',
                data: [
                    { name: 'Total', '2023': -1.1, '2024': -1.5, '2025': 1.5 },
                    { name: 'Residential', '2023': -2.3, '2024': -3.4, '2025': 0.4 },
                    { name: 'Civil Eng.', '2023': 2.6, '2024': 3.6, '2025': 3.3 },
                ],
                dataKeys: [
                    { key: '2023', color: '#8884d8' },
                    { key: '2024', color: '#82ca9d' },
                    { key: '2025', color: '#ffc658' },
                ]
            }
        ],
        fullText: `DIW Weekly Report
        Decline in nominal construction volume expected for the first time since the financial crisis; residential construction situation worsening.
        High construction prices and worsened financing conditions are weighing on the construction industry, especially building construction. Despite a nominal increase of six percent in construction expenses in 2023, it decreased by just over one percent in inflation-adjusted terms. In 2024, the nominal construction volume is likely to contract by around 3.5 percent, declining for the first time since the financial crisis due to falling construction prices. Residential construction in particular experienced a sharp decline in 2023 and will continue on this downward trend more strongly in 2024. Renovation and modernization activity is less affected than new construction. The situation will stabilize by 2025. The prospect of constructing 400,000 new residences annually is thus becoming increasingly out of reach. Only civil engineering is stabilizing the construction industry overall; it is likely to expand in both 2024 and 2025.
        `
    },
    {
        id: 'women_executives',
        title: 'Women Executives Barometer 2024',
        summary: 'The share of women on the executive boards of Germany\'s largest companies has increased to around 18% in late 2023. However, growth is slow and companies rarely appoint more than one woman to their executive board, indicating a potential "one and done" social norm.',
        keyFindings: [
            "Share of women on executive boards of top 200 companies reached ~18% in late 2023.",
            "44% of the top 200 companies still have no women on their executive board.",
            "The number of women CEOs in the top 200 companies has decreased.",
            "Legal requirements (inclusion quota) appear to be effective, but may establish a new social norm of having just one woman on the board."
        ],
        charts: [
            {
                type: 'bar',
                title: 'Number of Women on Executive Boards (Top 200 Companies)',
                description: 'The chart shows the distribution of companies by the number of women on their executive board for 2022 and 2023, indicating a slow shift towards gender diversity.',
                xAxisKey: 'name',
                data: [
                    { name: '0 Women', '2022': 50, '2023': 44 },
                    { name: '1 Woman', '2022': 38, '2023': 40 },
                    { name: '2+ Women', '2022': 12, '2023': 16 },
                ],
                dataKeys: [
                    { key: '2022', name: '2022 (%)', color: '#8884d8' },
                    { key: '2023', name: '2023 (%)', color: '#82ca9d' },
                ]
            }
        ],
        fullText: `DIW Weekly Report
        Share of women on the executive boards of large companies has increased, but generally is at most one woman.
        The number of women serving on the executive boards of large companies in Germany once again increased in 2023: Around 18 percent (153 of 875) of executive board members at the 200 largest companies were women as of late fall 2023, two percentage points higher than in 2022. Thus, growth has slightly picked up again. In some of the groups of companies analyzed, the figure was even higher. Around 23 percent of executive board members at the DAX 40 companies, for example, are women. The largest banks and insurance companies, which in the past years have lagged considerably behind other private sector companies and companies with government-owned shares, managed to catch up a bit. In many places, this growth is due to the fact that companies have appointed a woman to their executive board for the first time. Beyond that, there is currently not much progress. In addition, the number of women holding the position of CEO has decreased in many groups of companies. More commitment is needed from companies, both internally (e.g., from the supervisory board) and externally (e.g., from investors) to achieve gender parity in senior leadership positions.`
    },
    {
        id: 'energy_transition',
        title: 'Energy Transition in France',
        summary: 'France is largely on track with its greenhouse gas emissions targets and shows good progress in heat pump installation. However, the expansion of renewable energy sources like wind and solar is stalling, posing a challenge to achieving long-term climate goals despite its heavy reliance on nuclear power.',
        keyFindings: [
            "France relies heavily on nuclear power, which constituted 65% of power generation in 2023.",
            "Renewable energy expansion (solar, wind) is too slow to meet targets.",
            "France is a European leader in heat pump installation, a key element of its building decarbonization strategy.",
            "Key differences exist with Germany, which is phasing out nuclear while rapidly expanding renewables."
        ],
        charts: [
            {
                type: 'pie',
                title: 'Power Generation in France (2023)',
                description: 'Shares of different energy sources in France\'s power generation mix.',
                xAxisKey: 'name',
                data: [
                    { name: 'Nuclear', value: 65.0 },
                    { name: 'Hydroelectric', value: 11.9 },
                    { name: 'Wind', value: 10.2 },
                    { name: 'Solar', value: 4.4 },
                    { name: 'Fossil Fuels', value: 6.5 },
                    { name: 'Other', value: 2.0 },
                ],
                dataKeys: [
                    { key: 'value', color: '#0088FE' },
                    { key: 'value', color: '#00C49F' },
                    { key: 'value', color: '#FFBB28' },
                    { key: 'value', color: '#FF8042' },
                    { key: 'value', color: '#AF19FF' },
                    { key: 'value', color: '#FF1943' },
                ]
            }
        ],
        fullText: `DIW Weekly Report
        The Energy Transition in France: Expansion of Renewables Stalling, Good Progress on Heat Pumps.
        The energy transition is a major challenge for both Germany and France. This Weekly Report provides an overview of the short- and long-term goals as well as current developments and trends in France's energy and climate policy. It reveals that France is largely on track with its greenhouse gases targets and is also making good progress on installing heat pumps. However, its expansion of renewable energy capacities is falling short. Differences in the energy policies of France and Germany are most apparent in the power sector: While France is prioritizing nuclear power, Germany is relying heavily on renewable energy. For France to achieve its climate goals, it will have to expand renewable energy faster.`
    },
    {
        id: 'sovereign_debt',
        title: '200 Years of Sovereign Debt Crises',
        summary: 'A historical analysis of 321 sovereign debt restructurings since 1815 reveals that investor losses averaged 43%. Debt crises requiring multiple, or "serial," restructurings are associated with higher total creditor losses, suggesting that initial restructuring deals are often insufficient.',
        keyFindings: [
            "Investors lost 43% on average over 321 debt restructurings since 1815.",
            "One-third of debt crises require two or more restructurings to resolve.",
            "Crises with serial restructurings lead to larger total creditor losses, rising to 47% on average per default spell.",
            "The data suggests one deep, decisive restructuring is often better for creditors than multiple smaller ones.",
            "Independent debt sustainability analyses are crucial to determining the right haircut size and avoiding serial restructurings."
        ],
        charts: [
            {
                type: 'bar',
                title: 'Cumulative Creditor Losses by Number of Restructurings',
                description: 'This chart shows how average creditor losses accumulate as the number of restructurings within a single debt crisis increases.',
                xAxisKey: 'name',
                data: [
                    { name: '1 Restructuring', 'Average Loss (%)': 41.9 },
                    { name: '2 Restructurings', 'Average Loss (%)': 49.2 },
                    { name: '3+ Restructurings', 'Average Loss (%)': 59.1 },
                ],
                dataKeys: [
                    { key: 'Average Loss (%)', color: '#2563eb' }
                ]
            }
        ],
        fullText: `DIW Weekly Report
        200 years of sovereign debt crises: Serial restructurings may be accompanied by higher creditor losses.
        Many sovereign defaults have occurred worldwide over the past 200 years. An analysis of 321 sovereign debt restructurings since 1815 shows that foreign private and institutional investor losses were 43 percent on average. Notably, beginning in the 1970s, several debt exchanges have increasingly been required to resolve a default. To understand this new phenomenon better, this Weekly Report looks at total creditor losses across all restructurings during a default spell. Instead of focusing on each individual restructuring, the cumulative haircut adds up all losses across a default spell. These calculations show that debt crises with serial restructurings resulted in greater overall losses for creditors than a major one-off restructuring.`
    },
    {
        id: 'gender_care_gap',
        title: 'Gender Care Gap in Germany',
        summary: 'Women in European countries perform significantly more informal care work for relatives than men. This "gender care gap" is smaller in countries with higher public expenditure on formal long-term care. In Germany, which is mid-range, women are more than twice as likely as men to provide informal care, impacting their employment and income.',
        keyFindings: [
            "A significant gender care gap exists across Europe, with women providing more informal care.",
            "The gap is strongly correlated with public spending on formal care; more spending equals a smaller gap.",
            "In Germany, the gender care gap is 133%, meaning women are more than twice as likely as men to be caregivers.",
            "Countries with higher gender inequality in labor markets also exhibit a larger gender care gap.",
            "Policy recommendations include investing more in formal care and using tax/family policies to incentivize women's workforce participation."
        ],
        charts: [
            {
                type: 'line',
                title: 'Gender Care Gap vs. In-Patient Care Expenditure',
                description: 'This chart plots the relationship between a country\'s gender care gap and its public spending on in-patient care, showing a negative correlation.',
                xAxisKey: 'In-patient care expenditure (% of GDP)',
                data: [
                    { "In-patient care expenditure (% of GDP)": 0.1, "Gender Care Gap (%)": 231, name: 'Croatia' },
                    { "In-patient care expenditure (% of GDP)": 0.1, "Gender Care Gap (%)": 195, name: 'Greece' },
                    { "In-patient care expenditure (% of GDP)": 1.0, "Gender Care Gap (%)": 133, name: 'Germany' },
                    { "In-patient care expenditure (% of GDP)": 1.8, "Gender Care Gap (%)": 88, name: 'Sweden' },
                    { "In-patient care expenditure (% of GDP)": 1.9, "Gender Care Gap (%)": 80, name: 'Switzerland' },
                    { "In-patient care expenditure (% of GDP)": 0.5, "Gender Care Gap (%)": 63, name: 'Portugal' },
                ],
                dataKeys: [
                    { key: 'Gender Care Gap (%)', name: 'Gender Care Gap (%)', color: '#ef4444' }
                ]
            }
        ],
        fullText: `DIW Weekly Report
        Expanding long-term care insurance could reduce the gender care gap in Germany.
        In many European countries, men and women differ significantly in the amount of informal care work they provide for relatives, with women acting as caregivers far more frequently than men. This difference, known as the gender care gap, varies considerably between European countries, with Germany somewhere in the middle of the distribution. This Weekly Report analyzes the institutional, societal, and labor market factors that are related to the gender care gap across European countries. The results show that the gap is smaller in countries that spend more on the formal care system. In addition, they show that the gender care gap tends to be larger in countries that exhibit high gender inequality and high inequality in labor market participation between men and women.`
    }
];