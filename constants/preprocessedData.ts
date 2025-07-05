import type { ReportData } from '../types';

export const PREPROCESSED_DATA: ReportData[] = [
    {
        id: 'gender_care_gap',
        releaseDate: '2024-02-14',
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
                type: 'bar',
                title: 'Adjusted Gender Care Gap in European Countries (%)',
                description: 'Comparison of the adjusted gender care gap across various European countries, highlighting Germany\'s position.',
                xAxisKey: 'name',
                data: [
                    { name: 'Portugal', value: 63 },
                    { name: 'Switzerland', value: 80 },
                    { name: 'Sweden', value: 88 },
                    { name: 'Germany', value: 133 },
                    { name: 'Greece', value: 195 },
                    { name: 'Croatia', value: 231 },
                ],
                dataKeys: [ { key: 'value', name: 'Gender Care Gap (%)', color: '#ef4444' } ]
            },
            {
                type: 'line',
                title: 'Gender Care Gap vs. In-Patient Care Expenditure',
                description: 'This chart plots the relationship between a country\'s gender care gap and its public spending on in-patient care, showing a negative correlation.',
                xAxisKey: 'In-patient care expenditure (% of GDP)',
                data: [
                    { name: 'Croatia', 'In-patient care expenditure (% of GDP)': 0.1, 'Gender Care Gap (%)': 231 },
                    { name: 'Greece', 'In-patient care expenditure (% of GDP)': 0.1, 'Gender Care Gap (%)': 195 },
                    { name: 'Germany', 'In-patient care expenditure (% of GDP)': 1.0, 'Gender Care Gap (%)': 133 },
                    { name: 'Sweden', 'In-patient care expenditure (% of GDP)': 1.8, 'Gender Care Gap (%)': 88 },
                    { name: 'Switzerland', 'In-patient care expenditure (% of GDP)': 1.9, 'Gender Care Gap (%)': 80 },
                    { name: 'Portugal', 'In-patient care expenditure (% of GDP)': 0.5, 'Gender Care Gap (%)': 63 },
                ],
                dataKeys: [ { key: 'Gender Care Gap (%)', name: 'Gender Care Gap (%)', color: '#ef4444' } ]
            }
        ],
        fullText: `DIW Weekly Report 7 2024\nExpanding long-term care insurance could reduce the gender care gap in Germany. Study analyzes the correlation between gender care gaps and the care systems in European countries. Gender inequalities and differences in employment are associated with the gender care gap. To improve long-term care quality and to relieve caregiving relatives, Germany should invest more in formal care. In many European countries, men and women differ significantly in the amount of informal care work they provide for relatives, with women acting as caregivers far more frequently than men. This difference, known as the gender care gap, varies considerably between European countries, with Germany somewhere in the middle of the distribution. This Weekly Report analyzes the institutional, societal, and labor market factors that are related to the gender care gap across European countries. The results show that the gap is smaller in countries that spend more on the formal care system. In addition, they show that the gender care gap tends to be larger in countries that exhibit high gender inequality and high inequality in labor market participation between men and women. Thus, the results emphasize that the gender pay gap correlates with government investments in health care, the care system, and the labor market structure.`
    },
    {
        id: 'sanctions_on_russia',
        releaseDate: '2024-02-21',
        title: 'Sanctions on Russia',
        summary: "Multilateral cooperation in sanctioning Russia in 2014 amplified the economic impact, reducing domestic costs for sanctioning countries while increasing the welfare loss for Russia. The EU was a pivotal player, accounting for 78% of the inflicted welfare loss. The report suggests that burden-sharing mechanisms and coordination with emerging economies like China could significantly enhance the stability and effectiveness of sanctions.",
        keyFindings: [
            "Multilateral sanctions in 2014 lowered domestic costs for participating countries and increased the welfare loss for Russia by about 12%.",
            "The EU was the most crucial player, responsible for 78% of the total welfare loss inflicted on Russia.",
            "Baltic states faced disproportionately high costs from the sanctions, highlighting the need for burden-sharing mechanisms.",
            "Hypothetical participation by China could have increased Russia's welfare loss by an additional 22% with negligible costs to China itself.",
            "Deeper coordination on sanctioned products and engaging emerging economies are critical for future sanctions regimes."
        ],
        charts: [
            {
                type: 'bar',
                title: 'Welfare Loss from 2014 Sanctions on Russia (%)',
                description: 'Shows the welfare loss for selected countries and for Russia itself as a result of the 2014 sanctions.',
                xAxisKey: 'name',
                data: [
                    { name: 'USA', 'Loss for Country': 0.006, 'Loss for Russia': 0.13 },
                    { name: 'Germany', 'Loss for Country': 0.06, 'Loss for Russia': 0.28 },
                    { name: 'Japan', 'Loss for Country': 0.01, 'Loss for Russia': 0.05 },
                    { name: 'Lithuania', 'Loss for Country': 0.75, 'Loss for Russia': 0.04 },
                    { name: 'Poland', 'Loss for Country': 0.14, 'Loss for Russia': 0.08 }
                ],
                dataKeys: [
                    { key: 'Loss for Country', name: 'Welfare Loss for Country (%)', color: '#3b82f6', stackId: 'a' },
                    { key: 'Loss for Russia', name: 'Welfare Loss for Russia (%)', color: '#ef4444', stackId: 'b' }
                ]
            },
            {
                type: 'pie',
                title: 'Hypothetical Additional Welfare Loss for Russia by New Partner',
                description: 'Shows the potential additional welfare loss for Russia if certain neutral countries had joined the 2014 sanctions coalition.',
                xAxisKey: 'name',
                data: [
                    { name: 'China', value: 22 },
                    { name: 'Vietnam', value: 5 },
                    { name: 'Belarus', value: 4 },
                    { name: 'Turkey', value: 3 },
                    { name: 'Brazil', value: 2 },
                    { name: 'South Korea', value: 2 }
                ],
                dataKeys: [ { key: 'value', color: '#8884d8' } ]
            }
        ],
        fullText: `DIW Weekly Report 8 2024\nCoalitions for sanctions heighten costs for Russia but burden of implementation should be shared among member countries. Multilateral cooperation amplified the force of sanctions levied against Russia in 2014 following its annexation of Crimea. The EU was a pivotal player within the sanctioning coalition, accounting for 78 percent of the total welfare loss inflicted on Russia. Baltic economies shouldered disproportionately high economic burdens from Russia sanctions. Adjustment funds and other burden-sharing policies could reduce these asymmetries, thus enhancing the stability of sanction coalitions. This report demonstrates that multilateral cooperation through coalitions simultaneously reduced domestic welfare losses incurred from sanctions and intensified welfare losses imposed on Russia. Results also reveal significant disparities within the coalition, with Russia sanctions placing relatively high economic costs on Baltic nations that can be mitigated through a burden-sharing program. Hypothetical cooperation by emerging economies like China is also shown to substantially raise the force of sanctions against Russia.`
    },
    {
        id: 'gender_gap_coronavirus',
        releaseDate: '2024-03-06',
        title: 'Gender Gap & Coronavirus',
        summary: 'During the initial COVID-19 lockdowns, the gender care gap in Germany widened as mothers took on the majority of extra childcare. However, this shift was temporary, and the division of care work returned to its high, but pre-pandemic, level within a year. The report concludes that while a feared long-term reversal to traditional gender roles did not occur, underlying inequalities persist.',
        keyFindings: [
            "The initial pandemic phase saw a temporary increase in the gender care gap, with mothers performing more childcare.",
            "Within a year, the division of care work returned to pre-pandemic levels.",
            "The pandemic did not cause a lasting shift back to more traditional gender roles.",
            "Germany's gender care gap remains high compared to Nordic countries.",
            "Reforming tax policies (like Ehegattensplitting) and expanding childcare are key to reducing the care gap."
        ],
        charts: [
            {
                type: 'bar',
                title: 'Division of Childcare Before and During Pandemic (in %)',
                description: 'Share of couples with a child aged 14 or under, showing the shift in childcare duties during the pandemic.',
                xAxisKey: 'name',
                data: [
                    { name: 'About 50/50', 'Before pandemic (2019)': 30, 'Spring/Summer 2020': 28, 'Winter 2021/22': 31 },
                    { name: 'Primarily the mother', 'Before pandemic (2019)': 59, 'Spring/Summer 2020': 45, 'Winter 2021/22': 55 },
                    { name: '(Almost) entirely the mother', 'Before pandemic (2019)': 9, 'Spring/Summer 2020': 22, 'Winter 2021/22': 10 },
                ],
                dataKeys: [
                    { key: 'Before pandemic (2019)', color: '#8884d8' },
                    { key: 'Spring/Summer 2020', color: '#82ca9d' },
                    { key: 'Winter 2021/22', color: '#ffc658' },
                ]
            }
        ],
        fullText: `DIW Weekly Report 9 2024\nNo lasting increase in the gender care gap in Germany after the coronavirus pandemic. Using the German family panel pairfam, this study examines how couples divided care work during and around the coronavirus pandemic. Many feared that there would be a return to traditional genders roles due to the pandemic; at first, mothers more often (almost) entirely took care of children and the household. However, new data show that the gender care gap has now returned to its pre-pandemic level. Yet differences in the division of care work in Germany remain high, also in an international comparison. This Weekly Report shows that the gender care gap has since returned to its—albeit still high—pre-pandemic level. If policymakers want to effectively combat gender inequalities on the labor market, they should focus more on the unequal division of care work and dismantle existing barriers preventing a more equal division.`
    },
    {
        id: 'economic_outlook_spring_2024',
        releaseDate: '2024-03-12',
        title: 'Economic Outlook Spring 2024',
        summary: "Germany's economic recovery is delayed, with GDP growth projected to be zero in 2024 before a more solid rebound to 1.2% in 2025. While falling inflation and rising real wages should boost private consumption, corporate caution and weak foreign demand are holding back a stronger upswing. The global economy remains more robust, expecting 3.5% growth in both years.",
        keyFindings: [
            "German GDP growth is projected to be zero in 2024, revised down from previous forecasts.",
            "Recovery is expected to strengthen in 2025 with 1.2% GDP growth, driven by private consumption.",
            "Falling inflation and rising real wages are positive signs, but corporate uncertainty and weak demand are drags on the economy.",
            "The global economy is performing better, with projected growth of 3.5% for both 2024 and 2025.",
            "A turnaround in interest rates expected in early summer should improve financing conditions."
        ],
        charts: [
            {
                type: 'bar',
                title: 'Contribution to GDP Growth in Percentage Points',
                description: 'Shows the contribution of individual components to overall GDP growth in Germany.',
                xAxisKey: 'name',
                data: [
                    { name: '2023', 'Consumption': -0.3, 'Investments': 0.1, 'Exports': 0.5, 'Imports': -0.6 },
                    { name: '2024 (Forecast)', 'Consumption': 0.1, 'Investments': -0.2, 'Exports': 0.2, 'Imports': -0.1 },
                    { name: '2025 (Forecast)', 'Consumption': 0.8, 'Investments': 0.3, 'Exports': 0.3, 'Imports': -0.2 }
                ],
                dataKeys: [
                    { key: 'Consumption', color: '#8884d8', stackId: 'a' },
                    { key: 'Investments', color: '#82ca9d', stackId: 'a' },
                    { key: 'Exports', color: '#ffc658', stackId: 'a' },
                    { key: 'Imports', color: '#fca5a5', stackId: 'a' }
                ]
            },
            {
                type: 'line',
                title: 'Real GDP Growth Forecast for Major Economies (%)',
                description: 'Comparison of year-on-year real GDP growth forecasts for various economies.',
                xAxisKey: 'name',
                data: [
                    { name: 'Euro Area', '2024': 0.5, '2025': 1.5 },
                    { name: 'USA', '2024': 2.2, '2025': 1.5 },
                    { name: 'China', '2024': 4.7, '2025': 4.5 },
                    { name: 'Global Economy', '2024': 3.5, '2025': 3.5 },
                ],
                dataKeys: [
                    { key: '2024', color: '#8884d8' },
                    { key: '2025', color: '#82ca9d' }
                ]
            }
        ],
        fullText: `DIW Weekly Report 10+11 2024\nDIW Berlin Economic Outlook: Global economy experiencing robust growth; Germany's recovery is delayed further. German economy experiencing a sluggish recovery: GDP growth projected to be zero in 2024. The German economy will likely contract in the first quarter of 2024 due to still heightened inflation and weak demand. Inflation, which is falling in both Germany and the euro area overall, is expected to return close to the European Central Bank's two-percent target, suggesting that a turnaround in interest rates can be expected in early summer. Better financing conditions and the slowdown in price momentum are likely to somewhat boost both private consumption as well as corporate investments over the course of 2024. Nevertheless, there is currently still a great deal of uncertainty, particular in regard to the future economic policy environment, which is causing households and companies to remain cautious in Germany. German GDP will virtually stagnate and, carried by private consumption and public investments in equipment, increase more markedly by 1.2 percent in 2025. The global economy will continue to develop more robustly than Germany; it is projected to increase by 3.5 percent in both 2024 and 2025, which should gradually strengthen German exports.`
    },
    {
        id: 'refugee_health_entitlements',
        releaseDate: '2024-03-21',
        title: 'Refugee Health Entitlements',
        summary: "Germany's decision to extend the restriction period for refugees' full healthcare entitlements from 18 to 36 months is counterproductive. This policy negatively impacts refugees' health, particularly those with low education, and is likely to increase long-term costs for the state due to delayed, more expensive treatments. Wider adoption of the electronic health insurance card (EHIC) could mitigate some administrative barriers but is not yet nationwide.",
        keyFindings: [
            "The exclusion period for refugees' full healthcare access was extended from 18 to 36 months in February 2024.",
            "The average refugee in 2021 waited over a year (376 days) for full health care entitlements.",
            "The extension is projected to add another 352 days to the average waiting time.",
            "This policy disproportionately affects refugees with low education and little German knowledge, exacerbating existing health inequalities.",
            "Limiting healthcare access is short-sighted, as it often leads to delayed, more complex, and more expensive treatments in the long run."
        ],
        charts: [
            {
                type: 'bar',
                title: 'Average Waiting Time for Full Health Entitlements (Days)',
                description: 'Shows the actual and projected increase in waiting time for refugees to receive full health care entitlements.',
                xAxisKey: 'name',
                data: [
                    { name: 'Average Wait Time (Actual)', 'Days': 376 },
                    { name: 'Additional Wait Time (Projected)', 'Days': 352 }
                ],
                dataKeys: [ { key: 'Days', color: '#f472b6' } ]
            },
            {
                type: 'bar',
                title: 'Electronic Health Card (EHIC) Coverage for Refugees (2021)',
                description: 'Shows the percentage of refugees living in a region with EHIC and those who could actually benefit from it.',
                xAxisKey: 'name',
                data: [
                    { name: 'Live in EHIC region', 'Percent': 24 },
                    { name: 'Benefit from EHIC', 'Percent': 17 },
                ],
                dataKeys: [ { key: 'Percent', color: '#60a5fa' } ]
            }
        ],
        fullText: `DIW Weekly Report 12 2024\nExtended restrictions to health care entitlements for refugees: negative health consequences without the anticipated savings. As long as refugees are subject to the Asylum Seekers' Benefits Act (AsylbLG), they have limited health care entitlements. Analysis using IAB-BAMF-SOEP survey data provides information on how the AsylbLG impacts different groups of refugees. Scenario with an extended exclusion period shows: People with low level of education or little German knowledge are affected in particular. Electronic health insurance card for refugees can cushion the negative effects of the changes to the AsylbLG by dismantling administrative barriers. Access to health care should be simplified to save costs for the government in the long term. This increase may double the actual waiting time, which is currently already more than one year, as data from the Socio-Economic Panel show. This particularly affects refugees with a low level of education and little knowledge of German. A longer waiting time not only negatively impacts the health of affected individuals but is also disadvantageous for the state; late treatment often requires more expensive treatment.`
    },
    {
        id: 'natural_gas_decommissioning',
        releaseDate: '2024-04-02',
        title: 'Natural Gas Decommissioning',
        summary: "The transition to a climate-friendly heat supply necessitates the decommissioning of Germany's natural gas distribution networks. However, municipalities face significant challenges due to a lack of regulatory and economic incentives, financial dependency on gas revenues, and insufficient consideration in current heat plans. Federal support and regulatory adjustments are needed to manage this transition effectively.",
        keyFindings: [
            "Germany's heat transition requires the large-scale decommissioning of its 522,000 km natural gas distribution network.",
            "Current municipal heat plans in states like Baden-Württemberg do not adequately address network decommissioning.",
            "Municipalities face a conflict of interest: re-municipalizing gas networks for climate action vs. the financial incentive to continue selling gas.",
            "The existing regulatory framework, with its obligation to connect, makes decommissioning difficult.",
            "Federal and state support is crucial for municipalities to organize the phase-out and finance public services without gas revenues."
        ],
        charts: [
            {
                type: 'line',
                title: 'Forecast of Gas Consumption in the Building Sector',
                description: 'Shows the projected decline in gas consumption in the building sector in Germany.',
                xAxisKey: 'name',
                data: [
                    { name: '2025', 'TWh': 291 },
                    { name: '2030', 'TWh': 220 },
                    { name: '2035', 'TWh': 150 },
                    { name: '2040', 'TWh': 80 },
                    { name: '2045', 'TWh': 10 }
                ],
                dataKeys: [ { key: 'TWh', color: '#facc15' } ]
            }
        ],
        fullText: `DIW Weekly Report 13+14 2024\nHeat transition: Municipalities need federal support in decommissioning natural gas networks. Large parts of the existing natural gas distribution networks must be decommissioned due to the decarbonization of the heat supply. However, there are neither regulatory nor economic incentives for the gas network operators to do so and delaying the decommissioning could be expensive for the remaining customers. This Weekly Report analyzes to what extent municipalities can partially decommission the natural gas infrastructure with the help of municipal heat planning and by re-municipalizing the gas industry. The study also outlines the challenges associated with these instruments. Accordingly, re-municipalization does not necessarily result in the gas networks being decommissioned faster, a fact that remains unconsidered in the existing heat plans. The municipalities have a financial incentive to continue generating revenue from gas, partially because alternative income sources for funding public services are unavailable.`
    },
    {
        id: 'renewable_energy_pool',
        releaseDate: '2024-04-17',
        title: 'Renewable Energy Pool',
        summary: "A Renewable Energy Pool (RE-Pool) is proposed as a mechanism to hedge against volatile electricity prices for both consumers and producers. By aggregating long-term contracts for new wind and solar projects, the RE-Pool can provide predictable, affordable electricity, reduce financing costs for renewables, and strengthen incentives for demand-side flexibility, replacing the current sliding market premium support system.",
        keyFindings: [
            "The RE-Pool would pass the cost advantages of new renewable energy projects directly to consumers, ensuring predictable and affordable prices.",
            "It facilitates low-cost financing for new wind and solar projects by providing long-term hedging against price and regulatory risks.",
            "The pool structure hedges consumers' electricity costs for a share of their consumption, incentivizing them to invest in flexibility (e.g., batteries, heat storage) to align demand with renewable generation.",
            "The RE-Pool would be budget-neutral for the federal government and would replace the current sliding market premium for new renewable projects.",
            "The RE-Pool's volume could hedge over 100 TWh of generation by 2028 if all new projects are included from 2025."
        ],
        charts: [
            {
                type: 'line',
                title: 'Generation Costs of Renewable Energy Sources (€/MWh)',
                description: 'Shows the sharp decline in generation costs for solar and wind energy over the past decade.',
                xAxisKey: 'name',
                data: [
                    { name: '2010', 'Solar': 450, 'Onshore Wind': 100, 'Offshore Wind': 200 },
                    { name: '2015', 'Solar': 120, 'Onshore Wind': 80, 'Offshore Wind': 150 },
                    { name: '2022', 'Solar': 50, 'Onshore Wind': 30, 'Offshore Wind': 80 }
                ],
                dataKeys: [
                    { key: 'Solar', color: '#f59e0b' },
                    { key: 'Onshore Wind', color: '#10b981' },
                    { key: 'Offshore Wind', color: '#3b82f6' }
                ]
            },
            {
                type: 'line',
                title: 'Projected RE-Pool Volume and Average Generation Cost',
                description: 'Forecasts the growth of the RE-Pool\'s capacity and the stable, low average generation costs.',
                xAxisKey: 'name',
                data: [
                    { name: '2025', 'Volume (TWh)': 20, 'Cost (€/MWh)': 58 },
                    { name: '2026', 'Volume (TWh)': 50, 'Cost (€/MWh)': 57.5 },
                    { name: '2027', 'Volume (TWh)': 80, 'Cost (€/MWh)': 57 },
                    { name: '2028', 'Volume (TWh)': 110, 'Cost (€/MWh)': 56.5 },
                    { name: '2029', 'Volume (TWh)': 150, 'Cost (€/MWh)': 56 },
                    { name: '2030', 'Volume (TWh)': 200, 'Cost (€/MWh)': 55 }
                ],
                dataKeys: [
                    { key: 'Volume (TWh)', color: '#3b82f6' },
                    { key: 'Cost (€/MWh)', color: '#16a34a' }
                ]
            }
        ],
        fullText: `DIW Weekly Report 15 2024\nA Renewable Energy Pool brings benefits of energy transition to consumers. Despite the increasing importance of cost-effective renewable energy generation, electricity consumers are concerned about uncertain electricity prices. A Renewable Energy Pool makes it possible for consumers to have predictable and affordable electricity prices. Attractive conditions of long-term hedging contracts are passed on to consumers via an RE-Pool. The RE-Pool also addresses financing risks linked to regulatory uncertainties faced by renewable energy projects. This reduces financing costs and thus costs for consumers and enhances confidence in future renewable deployment and thus supports investments into the supply chain of project developers and manufacturers.`
    },
    {
        id: 'electricity_market_stability',
        releaseDate: '2024-05-08',
        title: 'Electricity Market Stability',
        summary: "Germany's electricity market has stabilized after the 2022 energy crisis, with prices returning to pre-war levels. The report argues that achieving an 80% renewable energy share by 2030 is feasible without nuclear power, emphasizing that price hikes were driven by external factors like French nuclear outages and gas prices, not the German nuclear phase-out.",
        keyFindings: [
            "German electricity market has recovered from the 2022 energy crisis, with prices returning to pre-war levels.",
            "A secure electricity supply was maintained throughout the crisis and after the final nuclear power plant shutdowns.",
            "Achieving 80% renewable energy by 2030 is feasible, but requires a swift phase-out of both coal and natural gas.",
            "Electricity price hikes were primarily driven by French nuclear plant downtimes and high gas prices, not the German nuclear phase-out.",
            "No new nuclear power plants are needed; the focus should be on expanding renewables."
        ],
        charts: [
            {
                type: 'bar',
                title: 'Hypothetical Generation Shift without Nuclear Power (TWh, 2021)',
                description: 'This chart shows which energy sources would have compensated for the absence of nuclear power in a 2021 scenario, based on model calculations.',
                xAxisKey: 'name',
                data: [
                    { name: 'Natural Gas', generation: 39.3 },
                    { name: 'Lignite', generation: 23.4 },
                    { name: 'Hard Coal', generation: 9.8 }
                ],
                dataKeys: [
                    { key: 'generation', name: 'Generation (TWh)', color: '#f97316' }
                ]
            },
            {
                type: 'pie',
                title: 'Target Electricity Mix for 2030 (% share)',
                description: "Illustrates the targeted 80% renewable energy share in Germany's electricity mix by 2030.",
                xAxisKey: 'name',
                data: [
                    { name: 'Solar', value: 34 },
                    { name: 'Onshore wind', value: 43 },
                    { name: 'Offshore wind', value: 15 },
                    { name: 'Hydrogen', value: 4 },
                    { name: 'Biomass', value: 4 }
                ],
                dataKeys: [
                    { key: 'value', color: '#facc15' },
                    { key: 'value', color: '#4ade80' },
                    { key: 'value', color: '#60a5fa' },
                    { key: 'value', color: '#c084fc' },
                    { key: 'value', color: '#9a3412' }
                ]
            }
        ],
        fullText: "DIW Weekly Report 16*17*18 2024\nElectricity markets stabilized following the energy crisis; 80 percent renewable energy and coal phase-out by 2030 are possible. Model-based analysis investigates medium-term development of the German electricity market. Electricity market withstood energy crises and the shutdown of the last nuclear power plants. An electricity supply powered by 80 percent renewable energy sources in 2023 is possible without nuclear and coal-fired power plants. The 2023 German Renewable Energy Sources Act (Erneuerbare-Energien-Gesetz, EEG) stipulates that at least 80 percent of electricity consumption must come from renewable energy sources by 2030. This implies that up to 600 terawatt hours (TWh) must be generated from renewable energy, compared to around 260 TWh today. Policymakers somewhat deprioritized this target following the 2022 energy crisis. However, the German and European electricity markets have since stabilized; electricity as well as natural gas prices are now about the same as they were before the start of the Russo-Ukrainian War. This clears the way for the next steps to be taken, in particular accelerating the expansion of renewable energy sources and driving the coal phase-out, and subsequently the natural gas phase-out, forward. This Weekly Report updates earlier model-based scenario analyses and discusses the results from 2022 and beyond. Despite major uncertainties, the German electricity market's security of supply was never at risk at any point in time. This was due to large power plants' existing excess capacities as well as the expansion of renewable energy sources."
    },
    {
        id: 'thermal_retrofitting',
        releaseDate: '2024-05-16',
        title: 'Thermal Retrofitting of Inefficient Buildings',
        summary: "Prioritizing thermal retrofitting of the most inefficient buildings (a \"Worst-First\" approach) offers significant social, economic, and climate benefits. It particularly protects low-income households from high heating costs. However, investment pace is slow, necessitating better policies around financing, building standards, and tenancy laws.",
        keyFindings: [
            "A 'Worst-First' retrofitting approach can significantly reduce heating cost risks, especially for low-income households.",
            "Low-income tenants are disproportionately affected by poorly insulated buildings, paying higher heating costs per square meter.",
            "Uncertain profitability and financing challenges are major barriers to retrofitting for homeowners.",
            "Retrofitting the 43% worst-performing buildings could halve the share of low-income households spending over 30% of income on heat.",
            "Policy improvements in building standards, subsidies for low-income owners, and tenancy law are needed to accelerate renovation."
        ],
        charts: [
            {
                type: 'bar',
                title: 'Residency in Very Inefficient Buildings by Household Group',
                description: 'Percentage of all German households, showing that low-income tenants are disproportionately living in very inefficient buildings.',
                xAxisKey: 'name',
                data: [
                    { name: 'Owners (Low Income)', 'Percent': 6 },
                    { name: 'Owners (High Income)', 'Percent': 9 },
                    { name: 'Tenants (Low Income)', 'Percent': 12 },
                    { name: 'Tenants (High Income)', 'Percent': 16 }
                ],
                dataKeys: [
                    { key: 'Percent', name: '% of all Households', color: '#ef4444' }
                ]
            },
            {
                type: 'bar',
                title: 'Share of Income Spent on Heating (Low-Income Households)',
                description: 'Shows how targeted retrofitting of inefficient buildings can drastically reduce the heating cost burden for low-income households.',
                xAxisKey: 'name',
                data: [
                    { name: 'Very High Cost Burden', 'Current State': 30, 'After Retrofit': 16 },
                    { name: 'High Cost Burden', 'Current State': 16, 'After Retrofit': 7 },
                    { name: 'Average Cost Burden', 'Current State': 11, 'After Retrofit': 3 }
                ],
                dataKeys: [
                    { key: 'Current State', color: '#f87171' },
                    { key: 'After Retrofit', color: '#4ade80' },
                ]
            }
        ],
        fullText: "DIW Weekly Report 19-20 2024\nThermal retrofitting of worst performing buildings mitigates risk of high heating costs. The pace of thermal retrofit of buildings in Germany remains slow. A Worst-First approach, prioritizing the retrofit of inefficient buildings, would address energy- and social policy objectives and deliver economic and climate benefits. Data from the German Socio-Economic Panel (SOEP) show how such an approach would protect especially low-income households often living in very inefficient buildings from heating costs risks. This group comprises 28 percent of all tenants and 13 percent of all homeowners. Yet, uncertainty about the cost-benefit of retrofitting and other priorities of homeowners mean that not enough buildings are retrofitted. As a result, the saving potentials, especially from very inefficient buildings, are not being realized. This would, however, be necessary to reduce heating cost risks and energy import dependency, and to meet climate targets. Better alignment of financing and subsidy instruments with the ownership structure, the further development of building standards to include minimum energy performance standards, and reform of tenancy law could improve the situation."
    },
    {
        id: 'russian_gas_sanctions_supply',
        releaseDate: '2024-05-23',
        title: 'Sanctions on Russian Gas & EU Supply',
        summary: 'The EU can completely forego Russian natural gas imports without endangering its supply security, even if demand remains high until 2030. Increased LNG imports and pipeline gas from other partners like Norway can compensate for the loss. Therefore, security of supply should not be an obstacle to imposing sanctions on Russian gas. A timely phase-out of natural gas is the best long-term strategy.',
        keyFindings: [
            "The EU can compensate for a complete disruption of Russian natural gas imports, even with high demand until 2030.",
            "Security of supply is not a valid reason to avoid sanctions on Russian gas.",
            "Central and Eastern European countries heavily dependent on Russia could also secure their supply from alternative sources like LNG and Norwegian pipeline gas.",
            "Existing and planned LNG import infrastructure is sufficient; further expansion is not needed and risks creating stranded assets.",
            "A rapid phase-out of natural gas through energy savings and renewables is the most effective way to reduce dependency and meet climate goals."
        ],
        charts: [
            {
                type: 'bar',
                title: 'EU Natural Gas Imports in 2030 (With vs. Without Russian Gas)',
                description: 'Compares the sources of EU gas imports in 2030 in two scenarios: with continued Russian imports and with a complete sanction.',
                xAxisKey: 'name',
                data: [
                    { name: 'Russia', 'With Russian Gas': 28, 'Without Russian Gas': 0 },
                    { name: 'Norway', 'With Russian Gas': 25, 'Without Russian Gas': 29 },
                    { name: 'USA', 'With Russian Gas': 15, 'Without Russian Gas': 18 },
                    { name: 'Algeria', 'With Russian Gas': 12, 'Without Russian Gas': 13 },
                    { name: 'Qatar', 'With Russian Gas': 10, 'Without Russian Gas': 11 },
                ],
                dataKeys: [
                    { key: 'With Russian Gas', color: '#a8a29e' },
                    { key: 'Without Russian Gas', color: '#22c55e' }
                ]
            }
        ],
        fullText: "DIW Weekly Report 21 2024\nSanctions against Russian gas would not endanger EU or German gas supply. Model-based analysis investigates if EU countries could compensate for a disruption of Russian natural gas imports in different demand scenarios. It would be possible to completely forego Russian natural gas even if EU gas demand remains high in the EU until 2030. In almost all scenarios, EU gas demand could be covered by pipeline imports from other countries and LNG without requiring infrastructure expansion. Central and Eastern European EU countries heavily dependent on Russian natural gas could also have a secure supply without Russian imports. Increased energy savings efforts and a timely natural gas phase-out would reduce dependency on Russia and contribute to climate change mitigation."
    },
    {
        id: 'supply_chain_bargaining',
        releaseDate: '2024-05-29',
        title: 'Supply Chain Bargaining Power',
        summary: "In vertically integrated markets like the coffee industry, a manufacturer's market share does not always equate to bargaining power. A 2015 coffee merger case shows that a divestiture remedy was only partially effective because the buyer, despite a smaller market share, had higher bargaining power. This highlights the need for competition authorities to explicitly analyze and quantify bargaining power when evaluating mergers and remedies to protect consumer welfare.",
        keyFindings: [
            "Bargaining power, not just market share, is a critical factor in vertically related industries like the food sector.",
            "A divestiture remedy in a 2015 coffee merger was only partially effective because the buyer had higher bargaining power than the seller of the divested brand.",
            "The merger, even with the remedy, led to a consumer surplus loss of about 132,000 euros for the sampled consumers; without the remedy, the loss would have been 483,000 euros.",
            "Competition authorities should analyze the entire supply chain and quantify bargaining power to identify effective merger remedies.",
            "Divesting to a manufacturer with less bargaining power is more beneficial for consumers, even if they have a slightly larger market share."
        ],
        charts: [
            {
                type: 'bar',
                title: 'Predicted Price Effects of Merger & Divestiture (%)',
                description: 'Shows the percentage price changes for the involved parties with and without the divestiture remedy.',
                xAxisKey: 'name',
                data: [
                    { name: 'Joint Venture', 'With Divestiture': 2.0, 'No Divestiture': 5.0 },
                    { name: 'Divested Brand Buyer', 'With Divestiture': -2.0, 'No Divestiture': 4.0 },
                    { name: 'Competitor', 'With Divestiture': -3.0, 'No Divestiture': 0.1 }
                ],
                dataKeys: [
                    { key: 'With Divestiture', color: '#82ca9d' },
                    { key: 'No Divestiture', color: '#ef4444' }
                ]
            }
        ],
        fullText: "DIW Weekly Report 22+23 2024\nQuantifying bargaining power in supply chains: essential for merger control. Study examines the effectiveness of divestiture remedies in the context of merger control. The bargaining power of firms plays an important role in mergers in value chains. Divestitures should favor manufacturers with less bargaining power. This report investigates the effectiveness of implementing such merger remedies when bargaining between manufacturers and retailers is a key market feature. We examine the upstream merger between DEMB and Mondelez that was approved by the European Commission in May 2015, subject to a divestiture. The divestiture indeed helped to mitigate the negative impacts of the merger. From the consumer's point of view, divestitures should take place in favor of manufacturers with less bargaining power."
    },
    {
        id: 'economic_outlook_summer_2024',
        releaseDate: '2024-06-18',
        title: 'Economic Outlook Summer 2024',
        summary: "The German economy showed unexpected strength at the start of 2024, driven by construction and exports, prompting an upward revision of the 2024 GDP forecast to 0.3%. However, private consumption remains weak. Growth is expected to accelerate to 1.3% in 2025. The global economy is also recovering, set to grow by 3.7% in 2024 and 3.6% in 2025, supported by interest rate cuts and rising real wages.",
        keyFindings: [
            "German GDP forecast for 2024 revised upward to +0.3% due to a strong start to the year.",
            "Growth drivers in early 2024 were construction investment and strong goods exports.",
            "Private consumption remains a weak point, but is expected to become the main driver of the recovery in 2025, with GDP growth of 1.3%.",
            "The global economy is gaining momentum, with expected growth of 3.7% in 2024 and 3.6% in 2025.",
            "Falling inflation, rising real wages, and anticipated interest rate cuts are brightening the outlook for both Germany and the world."
        ],
        charts: [
            {
                type: 'bar',
                title: 'Contribution to German GDP Growth (Percentage Points)',
                description: 'Shows the contribution of individual components to overall German GDP growth.',
                xAxisKey: 'name',
                data: [
                    { name: '2023', 'Consumption': -0.2, 'Investment': -0.1, 'Foreign Trade': 0.1 },
                    { name: '2024 (F)', 'Consumption': 0.1, 'Investment': 0.0, 'Foreign Trade': 0.2 },
                    { name: '2025 (F)', 'Consumption': 0.8, 'Investment': 0.2, 'Foreign Trade': 0.3 }
                ],
                dataKeys: [
                    { key: 'Consumption', color: '#8884d8', stackId: 'a' },
                    { key: 'Investment', color: '#82ca9d', stackId: 'a' },
                    { key: 'Foreign Trade', color: '#ffc658', stackId: 'a' }
                ]
            }
        ],
        fullText: "DIW Weekly Report 24+25+26 2023\nDIW Economic Outlook: Global economy recovering swiftly; German economy gaining momentum. German economy picked up at the beginning of 2024 and developed better than expected thanks to a strong expansion in construction investment and powerful goods exports. Private consumption declined in the first quarter unexpectedly; consumer sentiment has since brightened, inflation remains under three percent, real wages are rising. DIW Berlin is revising its forecast for the German economy upward to 0.3 percent, 2025 forecast now slightly more optimistic at plus 1.3 percent. Global economy also picking up speed and should expand by a good 3.5 percent in both 2024 and 2025. Overall, the outlook is somewhat more positive than it was in the spring: Instead of stagnating, DIW Berlin now expects the German economy to grow by 0.3 percent in 2024 and by 1.3 percent in 2025."
    },
    {
        id: 'household_carbon_footprint',
        releaseDate: '2024-07-03',
        title: 'Household Carbon Footprint',
        summary: "High-income households in Germany emit twice as many greenhouse gases as low-income households, primarily due to transport behavior, especially air travel. While all income groups exceed the sustainable emissions budget, the disparity highlights that policies targeting transport, such as banning short-haul flights and promoting housing swaps, are crucial for effective and equitable climate action.",
        keyFindings: [
            "High-income households have a carbon footprint twice the size of low-income households (10.1 vs. 5.6 tons CO2e/year).",
            "Transport is the main driver of emissions inequality, with the highest earners emitting seven times more from transport than the lowest earners.",
            "A single intercontinental flight can generate more emissions per capita than a full year of housing and nutrition combined.",
            "Housing emissions are driven by per-capita living space and building type, not income.",
            "Policy recommendations include an animal welfare levy, a ban on short-haul flights, and simplifying housing swaps to reduce emissions."
        ],
        charts: [
            {
                type: 'bar',
                title: 'Per Capita Carbon Footprint by Income Decile (tCO2e)',
                description: 'Shows the per capita carbon footprint broken down by consumption area across income deciles in Germany.',
                xAxisKey: 'name',
                data: [
                    { name: '1st Decile', 'Transport': 0.8, 'Nutrition': 1.6, 'Housing': 3.1 },
                    { name: '5th Decile', 'Transport': 2.2, 'Nutrition': 1.6, 'Housing': 2.9 },
                    { name: '10th Decile', 'Transport': 5.8, 'Nutrition': 1.6, 'Housing': 2.7 }
                ],
                dataKeys: [
                    { key: 'Transport', color: '#ef4444', stackId: 'a' },
                    { key: 'Nutrition', color: '#f59e0b', stackId: 'a' },
                    { key: 'Housing', color: '#3b82f6', stackId: 'a' }
                ]
            }
        ],
        fullText: `DIW Weekly Report 27 2024\nHigh-income households emit more greenhouse gases, primarily due to transport behavior. Study analyses carbon footprint of private households in Germany. High-income households cause twice as many emissions as low-income households. Drivers of emissions are meat consumption, household size, and in particular air travel. Nearly one third of greenhouse gas emissions in Germany are caused by private household consumption. Using Socio-Economic Panel (SOEP) data, this Weekly Report calculates the amount of CO2 equivalents emitted by households due to residential energy use, nutrition, and transport in Germany. Consumption in these three areas alone results in average emissions that exceed the emissions budget targeted for private individuals more than twofold.`
    },
    {
        id: 'sustainable_finance_taxonomies',
        releaseDate: '2024-07-10',
        title: 'Sustainable Finance Taxonomies',
        summary: "While over 50 countries are developing sustainable finance taxonomies to guide capital towards climate-neutral activities, their effectiveness is hampered by a lack of international harmonization, inconsistent standards, and limited mandatory reporting. The EU's taxonomy is among the most comprehensive, but global coordination is needed to avoid greenwashing and effectively steer the transition to net zero.",
        keyFindings: [
            "Over 50 countries and regions have introduced or are developing sustainable finance taxonomies.",
            "Many taxonomies, including the EU's, strive for a holistic approach by referring to international goals like the Paris Agreement and SDGs.",
            "A key weakness is the lack of mandatory reporting obligations and limited scope of market participants in most taxonomies.",
            "The share of a country's emissions covered by its taxonomy varies widely, from under 50% to over 90%.",
            "Greater international harmonization is crucial to increase effectiveness, prevent carbon leakage, and guide the global transition to net zero."
        ],
        charts: [
            {
                type: 'bar',
                title: 'Taxonomy Overall Score (out of 4)',
                description: 'A composite score evaluating the transition potential of different national and regional taxonomies based on five criteria.',
                xAxisKey: 'name',
                data: [
                    { name: 'EU', score: 3.6 },
                    { name: 'ASEAN', score: 3.2 },
                    { name: 'Singapore', score: 3.2 },
                    { name: 'South Korea', score: 3.0 },
                    { name: 'China', score: 2.8 },
                    { name: 'Japan', score: 2.8 },
                    { name: 'South Africa', score: 2.2 },
                    { name: 'Russia', score: 2.4 }
                ],
                dataKeys: [ { key: 'score', color: '#16a34a' } ]
            }
        ],
        fullText: `DIW Weekly Report 28 2024\nTransitioning to net zero: Full potential of sustainable finance taxonomies not yet exhausted. Taxonomies should create transparency and provide guidance in shifting capital flows to sustainable, environmentally-friendly activities. More and more countries are developing taxonomies with different approaches. Harmonizing taxonomies is important for companies and investors operating internationally. This Weekly Report analyzes 26 sustainable taxonomies from countries and regions around the world using five criteria. The results emphasize that better coordination between the existing taxonomies worldwide is needed and that the criteria and thresholds for selecting activities in alignment with taxonomies should be in accordance with the Paris Agreement.`
    },
    {
        id: 'paid_and_care_work_division',
        releaseDate: '2024-07-17',
        title: 'Division of Paid and Care Work',
        summary: "There is a significant gap between the ideal and actual division of paid and care work among parents in Germany. While attitudes are becoming more egalitarian, the reality is that most couples, especially in western Germany, still follow a traditional 'one-and-a-half-earner' model. This discrepancy is largely driven by the German tax and transfer system (Ehegattensplitting, mini-jobs), insufficient childcare, and the gender pay gap.",
        keyFindings: [
            "A large gap exists between parents' egalitarian ideals and their actual unequal division of paid and care work.",
            "In West Germany, 63% of couples with primary school children use a 'one-and-a-half-earner' model, but only 42% of people consider this ideal.",
            "The German tax and transfer system, especially the interplay of income splitting (Ehegattensplitting) and mini-jobs, makes the unequal model financially attractive.",
            "Insufficient childcare infrastructure and a high gender pay gap reinforce the traditional division of labor.",
            "To align reality with ideals, policymakers must modernize the tax system and expand daycare options."
        ],
        charts: [
            {
                type: 'bar',
                title: 'Employment Combination for Couples with a Primary School Child (6-10 years old)',
                description: 'Compares the actual employment models of couples with their ideal preferences in West and East Germany.',
                xAxisKey: 'name',
                data: [
                    { name: 'One-and-a-half-earner (West)', 'Actual': 63, 'Ideal': 42 },
                    { name: 'Dual earner/carer (West)', 'Actual': 3, 'Ideal': 18 },
                    { name: 'One-and-a-half-earner (East)', 'Actual': 38, 'Ideal': 21 },
                    { name: 'Dual earner/carer (East)', 'Actual': 3, 'Ideal': 15 }
                ],
                dataKeys: [
                    { key: 'Actual', color: '#f87171' },
                    { key: 'Ideal', color: '#60a5fa' }
                ]
            }
        ],
        fullText: `DIW Weekly Report 29+30+31 2024\nDivision of paid and care work between parents: Reality often differs greatly from the ideals. Mothers and fathers in Germany still have a very unequal division of paid and care work. Analysis of FReDA data shows that attitudes toward the ideal division of paid work between couples with children under 12 are more egalitarian than couples' actual behaviors. One reason for this discrepancy is the German tax and transfer system, in particular the interplay of Ehegattensplitting and mini-jobs. Insufficient childcare infrastructure and a high gender pay gap also create incentives for the one-and-a-half-earner model and the male breadwinner model.`
    },
    {
        id: 'income_work_health_satisfaction',
        releaseDate: '2024-08-21',
        title: 'Income, Work, and Health Satisfaction',
        summary: "While general life, income, and work satisfaction in Germany have remained stable or increased since 2004, significant disparities persist, particularly in health satisfaction. Low-income earners and parents report considerably lower health satisfaction, highlighting these groups as key areas for policy intervention to improve well-being and reduce inequality.",
        keyFindings: [
            "General life satisfaction and satisfaction with income and work have increased or remained constant since 2004.",
            "Gaps in income satisfaction between men/women and East/West Germany have shrunk considerably.",
            "Health satisfaction shows the most significant group differences and has remained largely stagnant.",
            "People in the bottom income tercile and parents report particularly low health satisfaction.",
            "Policymakers should focus on relieving burdens on low-income individuals and parents, for example by improving childcare and reducing bureaucracy."
        ],
        charts: [
            {
                type: 'line',
                title: 'Satisfaction Trends in Germany (2004-2021)',
                description: 'Shows the development of satisfaction in different life domains on a scale from 0 to 10.',
                xAxisKey: 'name',
                data: [
                    { name: '2004', 'General': 6.7, 'Work': 6.8, 'Health': 6.5, 'Income': 5.5 },
                    { name: '2011', 'General': 7.0, 'Work': 7.0, 'Health': 6.6, 'Income': 6.2 },
                    { name: '2018', 'General': 7.3, 'Work': 7.2, 'Health': 6.5, 'Income': 6.8 },
                    { name: '2021', 'General': 7.4, 'Work': 7.2, 'Health': 6.9, 'Income': 6.9 }
                ],
                dataKeys: [
                    { key: 'General', color: '#8884d8' },
                    { key: 'Work', color: '#82ca9d' },
                    { key: 'Health', color: '#ffc658' },
                    { key: 'Income', color: '#ef4444' }
                ]
            },
            {
                type: 'bar',
                title: 'Health Satisfaction by Group (2021)',
                description: 'Compares health satisfaction levels across different demographic groups on a scale of 0 to 10.',
                xAxisKey: 'name',
                data: [
                    { name: 'Low Income', value: 6.9 },
                    { name: 'High Income', value: 7.4 },
                    { name: 'With Children', value: 6.7 },
                    { name: 'No Children', value: 7.3 },
                    { name: 'Women', value: 6.7 },
                    { name: 'Men', value: 7.0 }
                ],
                dataKeys: [ { key: 'value', name: 'Satisfaction Score', color: '#f59e0b' } ]
            }
        ],
        fullText: `DIW Weekly Report 32+33+34 2024\nIncome, work, and health satisfaction differ primarily by household income, age, and parental status. General life satisfaction as well as income, work, and health satisfaction have either increased or remained constant since 2004. Gaps in income satisfaction between women and men, east and west German residents, and younger and older people have shrunk considerably. There are serious group differences when it comes to health satisfaction. Health satisfaction is particularly low for people in the bottom income tercile and parents. Policymakers should relieve the burden on these groups, for example by improving the childcare situation or reducing bureaucracy involved in applying for benefits.`
    },
    {
        id: 'economic_outlook_autumn_2024',
        releaseDate: '2024-09-12',
        title: 'Economic Outlook Autumn 2024',
        summary: "The German economy is stagnating, with a slight GDP decline in Q2 2024 erasing earlier gains. A recovery isn't expected until late 2024, with forecasts showing 0.0% growth for this year, revised down to 0.9% for 2025. High savings rates and weak industrial demand are key headwinds, while the global economy continues a more robust, albeit recently weakened, recovery.",
        keyFindings: [
            "The German economy is stagnating, with the 2024 GDP growth forecast at 0.0%.",
            "The 2025 growth forecast has been revised down to 0.9%, with a 1.4% growth expected in 2026.",
            "Despite higher real wages, private consumption is weak as households increase their savings.",
            "Weak domestic and foreign demand for industrial goods continues, hindering exports and investment.",
            "The global economy is on a recovery path with 3.8% growth projected for 2024, but has shown recent signs of weakening."
        ],
        charts: [
            {
                type: 'bar',
                title: 'Contribution to German GDP Growth (Percentage Points)',
                description: 'Shows the contribution of individual components to overall German GDP growth, with forecasts for 2024-2026.',
                xAxisKey: 'name',
                data: [
                    { name: '2024', 'Consumption': 0.0, 'Investment': -0.3, 'Net Exports': 0.1 },
                    { name: '2025', 'Consumption': 0.9, 'Investment': 0.2, 'Net Exports': -0.2 },
                    { name: '2026', 'Consumption': 1.4, 'Investment': 0.3, 'Net Exports': -0.3 }
                ],
                dataKeys: [
                    { key: 'Consumption', color: '#8884d8', stackId: 'a' },
                    { key: 'Investment', color: '#82ca9d', stackId: 'a' },
                    { key: 'Net Exports', color: '#ffc658', stackId: 'a' }
                ]
            }
        ],
        fullText: `DIW Weekly Report 35-39 2024\nDIW Berlin Economic Outlook: Industry sputtering globally while the German economy stagnates. German economy continuing to tread water; it declined in the second quarter following a positive start to the year; earliest expected recovery not until the end of 2024. Despite higher real wages and inflation in the two-percent range, people are saving their money; exports and investments are also floundering. DIW Berlin forecasts stagnation for the German economy this year and growth of 0.9 and 1.4 percent in 2025 and 2026. The German economy continues to stagnate. After it appeared to finally be growing at the start of 2024, it experienced a slight setback in the second quarter. Although incomes are rising and inflation is now near the two-percent target, people in Germany are saving their money. As investments and exports faltered due to the sluggish industrial sector, the upturn has been delayed for the time being.`
    },
    {
        id: 'ecb_monetary_policy_energy_crisis',
        releaseDate: '2024-10-16',
        title: 'ECB Monetary Policy & Energy Crisis',
        summary: "The ECB's delayed response to the post-pandemic inflation surge, while supporting economic recovery, ultimately exacerbated the rise in energy and consumer prices. A counterfactual analysis shows that a quicker, more decisive interest rate hike would have contained inflation more effectively, leading to a shorter, briefer recession and a more stable economic outcome by late 2023. The episode highlights the challenges the ECB faces without a full fiscal and capital markets union.",
        keyFindings: [
            "The ECB's prolonged expansionary monetary policy contributed to the inflation surge, particularly in energy prices.",
            "An earlier, sharper interest rate hike could have prevented the strong rise in consumer and energy prices.",
            "A counterfactual 'mandate-optimal' policy would have caused a brief, sharp recession but would have stabilized the economy by the end of 2023.",
            "The ECB's policy was a trade-off between fighting inflation and supporting a fragile economy, but it underestimated its own influence on energy prices.",
            "The lack of a fiscal and capital markets union in the euro area makes it more difficult for the ECB to fulfill its price stability mandate."
        ],
        charts: [
            {
                type: 'line',
                title: 'Headline Inflation (HICP) - Actual vs. Optimal Policy',
                description: 'Compares the actual path of inflation with the simulated path under a mandate-optimal monetary policy.',
                xAxisKey: 'name',
                data: [
                    { name: 'Q1 2022', 'Actual': 5.9, 'Optimal': 3.0 },
                    { name: 'Q2 2022', 'Actual': 8.1, 'Optimal': 2.5 },
                    { name: 'Q3 2022', 'Actual': 9.9, 'Optimal': 2.1 },
                    { name: 'Q4 2022', 'Actual': 10.0, 'Optimal': 2.0 },
                    { name: 'Q1 2023', 'Actual': 8.5, 'Optimal': 2.0 }
                ],
                dataKeys: [
                    { key: 'Actual', color: '#ef4444' },
                    { key: 'Optimal', color: '#22c55e' }
                ]
            }
        ],
        fullText: `DIW Weekly Report 40+41+42 2024\nMonetary policy during the energy price crisis: ECB could have contained inflation earlier. Study performs an empirical investigation of the ECB's monetary policy strategy during the post-COVID inflation surge. Expansionary monetary policy contributed to inflation, but supported the economy. An earlier interest rate hike would have dampened inflation and caused only a brief economic slump. Estimates show that while the ECB's policy strategy of maintaining a low level of interest rates did improve the economy, it also exacerbated the rise in energy prices. The empirical analysis demonstrates that an interest rate hike at the beginning of the energy crisis would have stabilized inflation more effectively.`
    },
    {
        id: 'carbon_pricing_dividend',
        releaseDate: '2024-10-23',
        title: 'Carbon Pricing & Climate Dividend',
        summary: "To mitigate the regressive burden of rising carbon prices from the new EU ETS2, a swift introduction of a climate dividend is needed. A flat-rate dividend for all residents would relieve low-income households most. To improve targeting and finance additional support for vulnerable groups, this dividend should be reduced for higher-income earners, which can be done unbureaucratically through the existing tax system.",
        keyFindings: [
            "The transition to the EU ETS2 in 2027 will significantly increase carbon prices for motor and heating fuels, disproportionately affecting low-income households.",
            "A universal, automatically paid climate dividend can largely mitigate the burden of carbon pricing.",
            "Even with a dividend, vulnerable households with high energy consumption will require additional, targeted support.",
            "To fund this extra support, the climate dividend should be reduced for higher-income earners as part of their wage and income tax calculations.",
            "This approach strengthens social acceptance for climate policy while ensuring relief is targeted efficiently."
        ],
        charts: [
            {
                type: 'bar',
                title: 'Households Burdened by >0.5% of Net Income',
                description: 'Shows the percentage of households whose net income is burdened by more than 0.5% under different climate dividend scenarios.',
                xAxisKey: 'name',
                data: [
                    { name: 'No Dividend', 'All HH': 51.2, 'Low-Income HH (Bottom 20%)': 44.8 },
                    { name: 'Full Dividend', 'All HH': 16.5, 'Low-Income HH (Bottom 20%)': 16.3 },
                    { name: 'Reduced Dividend', 'All HH': 17.7, 'Low-Income HH (Bottom 20%)': 17.2 }
                ],
                dataKeys: [
                    { key: 'All HH', name: 'All Households', color: '#a8a29e' },
                    { key: 'Low-Income HH (Bottom 20%)', name: 'Low-Income HH', color: '#ef4444' }
                ]
            }
        ],
        fullText: `DIW Weekly Report 43+44 2024\nCarbon pricing: Swift introduction of a climate dividend needed, reduce at higher incomes. Transition from German National Emissions Trading System to European Emissions Trading System from 2027 may increase carbon price considerably for motor and heating fuels. A climate dividend automatically paid to all residents in Germany can significantly mitigate carbon pricing burdens. A climate dividend relieves low-income households that are not sufficiently met by other measures. Low-income households with high energy consumption require additional aid and subsidy programs. To this end, the climate dividend should be reduced for higher-income earners as part of wage and income taxes.`
    },
    {
        id: 'heat_monitor_2023',
        releaseDate: '2024-11-06',
        title: 'Heat Monitor 2023',
        summary: "In 2023, German households' heating energy consumption fell by four percent, a smaller decline than in 2022, despite prices rising by another third. This suggests that savings potential from simple behavioral changes is nearing its limit. To meet climate targets, a significant push in energy-efficient building retrofits and a switch to renewable heating systems is now crucial.",
        keyFindings: [
            "Heating energy prices rose by another 31.4% in 2023, following a 33.3% increase in 2022.",
            "Temperature-adjusted heating energy consumption decreased by only 3.8% in 2023, less than the 5.3% reduction in 2022.",
            "Price variations are much higher for district heating compared to gas and oil.",
            "The reduced savings momentum indicates that easy behavioral savings are likely exhausted.",
            "Meeting climate targets will require a significant acceleration of energy-efficient building retrofits and switching to renewable heating systems."
        ],
        charts: [
            {
                type: 'bar',
                title: 'Year-on-Year Change in Heating Metrics (%)',
                description: 'Compares the percentage change in heating energy prices, consumption, and CO2 emissions for 2022 and 2023.',
                xAxisKey: 'name',
                data: [
                    { name: 'Energy Prices', '2022': 33.3, '2023': 31.4 },
                    { name: 'Consumption', '2022': -5.3, '2023': -3.8 },
                    { name: 'CO2 Emissions', '2022': -5.6, '2023': -4.3 }
                ],
                dataKeys: [
                    { key: '2022', color: '#f87171' },
                    { key: '2023', color: '#fb923c' }
                ]
            }
        ],
        fullText: `DIW Weekly Report 45 2024\nHeat Monitor 2023: Despite continued price increases, lower decline in households' heating energy consumption. Temperature-adjusted heating energy consumption and CO2 emissions in Germany's building sector went down by four percent in 2023 — a smaller reduction than in 2022. Heating energy prices continued to rise in 2023 — taking them up by yet another third compared to the previous year. Variation in prices is higher for district heating than for gas and oil. As a continued increase in residential energy savings is unlikely, meeting climate targets will require pushing of energy-efficient building retrofits.`
    },
    {
        id: 'energy_efficient_renovation',
        releaseDate: '2024-11-21',
        title: 'Energy-Efficient Renovation',
        summary: "Despite nominal increases, price-adjusted investments in the energy-efficient renovation of Germany's building stock have declined since 2013. The trend is particularly poor for non-residential buildings and for window/door replacements. To reverse this trend and meet climate targets, a significant increase in real investment and more robust government funding are urgently needed, especially given rising construction and financing costs.",
        keyFindings: [
            "Real (price-adjusted) investment in energy-efficient renovation was 7% lower in 2023 than in 2013.",
            "While nominal investments rose to 72 billion euros in 2023, this was more than offset by sharp increases in construction prices.",
            "Real investment in insulation has stagnated, while investment in windows and doors has declined by almost 25% since 2013.",
            "The German Federal Government increased funding for 2024 to 16.7 billion euros, but more is needed to reverse the declining trend in real investment.",
            "A trend reversal is urgently needed to meet climate targets in the building sector."
        ],
        charts: [
            {
                type: 'line',
                title: 'Real Investment in Energy-Efficient Renovation (Index 2013=100)',
                description: 'Shows the price-adjusted trend of investments in different renovation categories.',
                xAxisKey: 'name',
                data: [
                    { name: '2013', 'Overall': 100, 'Insulation': 100, 'Heating': 100, 'Windows': 100 },
                    { name: '2018', 'Overall': 95, 'Insulation': 105, 'Heating': 115, 'Windows': 98 },
                    { name: '2021', 'Overall': 108, 'Insulation': 115, 'Heating': 125, 'Windows': 88 },
                    { name: '2023', 'Overall': 93, 'Insulation': 102, 'Heating': 118, 'Windows': 77 }
                ],
                dataKeys: [
                    { key: 'Overall', color: '#22c55e' },
                    { key: 'Insulation', color: '#3b82f6' },
                    { key: 'Heating', color: '#ef4444' },
                    { key: 'Windows', color: '#f59e0b' }
                ]
            }
        ],
        fullText: `DIW Weekly Report 46 2024\nEnergy-efficient building renovation: Price-adjusted investments declining; trend reversal needed to reach climate targets. Investments in energy-efficient building renovation in Germany increased by 12 billion euros to 72 billion euros between 2021 and 2023, in part due to rising energy prices. However, investments fell by over six percent in price-adjusted terms because due to the simultaneous increase in construction prices. To achieve climate targets, considerably more real investments in insulation, new windows, heating, and other measures are needed. German Federal Government increased funding for 2024 to 16.7 billion euros, but more is needed to reverse the trend in energy-efficient renovation.`
    },
    {
        id: 'electric_road_freight',
        releaseDate: '2024-12-04',
        title: 'Electric Road Freight',
        summary: "Market trends, cost analysis, and efficiency advantages strongly favor battery-electric trucks with stationary charging for decarbonizing road freight transport. While hydrogen trucks are discussed, their market adoption is stagnant and they face significant efficiency and cost disadvantages. Policy should focus on expanding fast-charging infrastructure to support the battery-electric transition.",
        keyFindings: [
            "The battery-electric truck fleet is growing, while the hydrogen truck fleet is stagnating.",
            "Major manufacturers are overwhelmingly focusing on producing and selling battery-electric models.",
            "Battery-electric trucks have significant energy efficiency and lifecycle cost advantages over hydrogen-powered alternatives.",
            "Market developments clearly favor battery-electric drives; government support should focus on expanding the fast-charging infrastructure.",
            "Challenges for battery-electric trucks, like grid connection and raw material needs, can be addressed with complementary technologies like battery swapping or overhead lines."
        ],
        charts: [
            {
                type: 'bar',
                title: 'Available Heavy-Duty Electric Vehicle Models in Germany (Oct 2024)',
                description: 'Shows the number of available and announced truck models by drive type, highlighting the dominance of battery-electric options.',
                xAxisKey: 'name',
                data: [
                    { name: 'Available', 'Battery-electric': 117, 'Fuel cell': 6 },
                    { name: 'Announced', 'Battery-electric': 16, 'Fuel cell': 25 }
                ],
                dataKeys: [
                    { key: 'Battery-electric', name: 'Battery-electric', color: '#2563eb', stackId: 'a' },
                    { key: 'Fuel cell', name: 'Fuel cell', color: '#22c55e', stackId: 'a' }
                ]
            },
            {
                type: 'bar',
                title: 'Lifecycle CO2e Emissions for Semi-Trailer Trucks (g/km, 2030)',
                description: 'Compares the climate impact of different truck technologies over their entire lifecycle, including production, energy supply, and use.',
                xAxisKey: 'name',
                data: [
                    { name: 'Diesel', Emissions: 1000 },
                    { name: 'Battery Electric (2030 Mix)', Emissions: 300 },
                    { name: 'Fuel Cell (Gray H2)', Emissions: 1100 },
                    { name: 'Fuel Cell (Green H2)', Emissions: 280 }
                ],
                dataKeys: [
                    { key: 'Emissions', name: 'Emissions (g CO2e/km)', color: '#8884d8' }
                ]
            }
        ],
        fullText: "DIW Weekly Report 47+48 2024\nThe future is battery electric: Climate change mitigation in road freight transport. Road freight transport must switch to alternative drive technologies, such as battery-electric or hydrogen vehicles, to mitigate its impact on the climate. Preliminary results from an ongoing research project show that the fleet of battery-electric trucks as well as the number of models on offer have recently grown significantly, albeit from a very low level. This is not the case for hydrogen trucks. Considerable amounts of investment from the private sector are flowing into the charging infrastructure. Compared to hydrogen trucks, battery-electric vehicles have major advantages when it comes to energy efficiency, foreseeable energy costs, and their expected and realistic contribution to climate change mitigation. Policymakers should therefore set a clear focus on ramping up battery-electric trucks while expanding the charging infrastructure, the fast charging network more vigorously in particular."
    },
    {
        id: 'remittances_by_migrants',
        releaseDate: '2024-12-05',
        title: 'Remittances by Migrants',
        summary: "Contrary to political debate, refugees in Germany send remittances abroad less often than other migrant groups. In 2021, only 7% of refugees sent money home, compared to 12% of non-refugee migrants. The data suggests that structural barriers, not a lack of desire, limit refugees' ability to remit. The report calls for a reevaluation of remittances as a vital tool for development and poverty alleviation, rather than a subject of unsubstantiated political concern.",
        keyFindings: [
            "Refugees send remittances less often than other migrants: 7% of refugees vs. 12% of non-refugee migrants in 2021.",
            "The share of refugees sending remittances has been on a downward trend since 2012.",
            "The likelihood of sending remittances decreases with larger household sizes in Germany and increases with a stronger connection to the home country.",
            "The political debate focusing on refugees sending social benefits abroad is not supported by evidence.",
            "Remittances should be recognized as an important contribution to development and poverty reduction in migrants' home countries."
        ],
        charts: [
            {
                type: 'line',
                title: 'Share of Population in Germany Sending Remittances Abroad (%)',
                description: 'Shows the trend of sending remittances for different population groups in Germany from 2012 to 2021.',
                xAxisKey: 'name',
                data: [
                    { name: '2013', 'Refugees': 15, 'Non-Refugee Migrants': 10, 'All People': 4 },
                    { name: '2016', 'Refugees': 7, 'Non-Refugee Migrants': 8, 'All People': 3 },
                    { name: '2019', 'Refugees': 10, 'Non-Refugee Migrants': 11, 'All People': 4 },
                    { name: '2021', 'Refugees': 7, 'Non-Refugee Migrants': 12, 'All People': 3.5 }
                ],
                dataKeys: [
                    { key: 'Refugees', color: '#ef4444' },
                    { key: 'Non-Refugee Migrants', color: '#3b82f6' },
                    { key: 'All People', color: '#22c55e' }
                ]
            }
        ],
        fullText: `DIW Weekly Report 49 2024\nRefugees send remittances abroad less often than other migrants. Study investigates how the share of people living in Germany who send remittances abroad has changed. Seven percent of refugees sent remittances abroad and the trend is continuing downward. Remittances abroad provide an important contribution to development and should be reevaluated. This Weekly Report investigates how the share of people living in Germany who send remittances abroad has changed over time according to their migration background (with or without a refugee background) and which factors influence the likelihood of remitting. Based on Socio-Economic Panel (SOEP) data as well as the IAB-SOEP Migration Samples and the IAB-BAMF-SOEP Refugee Survey from 2013 to 2022, the analysis shows that migrants without a refugee background send remittances more often, while refugees are often rarely able to send remittances due to structural barriers.`
    },
    {
        id: 'economic_outlook_winter_2024',
        releaseDate: '2024-12-18',
        title: 'Economic Outlook Winter 2024',
        summary: "The German economy is expected to contract by 0.2% in 2024, marking a second consecutive year of decline amid a serious industrial crisis and weak private consumption. Growth forecasts for 2025 have been significantly downgraded to just 0.2%. The global economy, driven by a booming US, is more resilient, but increasing protectionism and geopolitical tensions pose significant threats.",
        keyFindings: [
            "German GDP is forecast to decline by 0.2% in 2024, the second straight year of contraction.",
            "The 2025 growth forecast is slashed to 0.2%, with a 1.2% recovery expected in 2026.",
            "German industry is in a serious crisis, facing weak demand, international competition, and policy uncertainty.",
            "Despite rising real wages, private consumption is weak due to job security worries.",
            "The global economy is driven by the US boom, with 3.7% growth expected in 2024, but is threatened by rising protectionism."
        ],
        charts: [
            {
                type: 'bar',
                title: 'German GDP Growth Contribution (Percentage Points)',
                description: 'Shows the contribution of individual components to overall German GDP growth.',
                xAxisKey: 'name',
                data: [
                    { name: '2024', 'Consumption': -0.2, 'Investment': -0.1, 'Net Exports': 0.1 },
                    { name: '2025', 'Consumption': 0.2, 'Investment': 0.1, 'Net Exports': -0.1 },
                    { name: '2026', 'Consumption': 1.2, 'Investment': 0.3, 'Net Exports': -0.3 }
                ],
                dataKeys: [
                    { key: 'Consumption', color: '#8884d8', stackId: 'a' },
                    { key: 'Investment', color: '#82ca9d', stackId: 'a' },
                    { key: 'Net Exports', color: '#ffc658', stackId: 'a' }
                ]
            }
        ],
        fullText: `DIW Weekly Report 50-52 2024\nDIW Berlin Economic Outlook: German economy stuck in limbo while trade conflicts threaten the global economy. German economy in a difficult position facing weak growth and structural change; GDP will decline in 2024 for the second year in a row. German industry experiencing a serious crisis in particular, with increasing international competition, increasing protectionism, and unclear domestic economic policies having a negative impact. Private consumption not picking up speed despite increasing real wages, partially due to worries about job layoffs. DIW Berlin is revising its growth forecast for Germany for 2025 significantly downward to 0.2 percent; growth of 1.2 percent is expected in 2026. A gradual easing is not expected until mid-2025, when domestic and foreign economic uncertainties will successively lessen.`
    }
];