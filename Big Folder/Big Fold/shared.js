/* ═══════════════════════════════════════
   ORIDENT INC — SHARED JS UTILITIES
   ═══════════════════════════════════════ */

// ── MOCK PRICE ENGINE ──────────────────────────────────────────
const ASSETS = {
  stocks:[
    // ── MEGA CAP TECH ──
    {sym:'AAPL',name:'Apple Inc.',price:189.30,chg:1.24,pct:0.66,sector:'Tech'},
    {sym:'MSFT',name:'Microsoft Corp.',price:415.20,chg:3.10,pct:0.75,sector:'Tech'},
    {sym:'GOOGL',name:'Alphabet Inc.',price:175.80,chg:-0.95,pct:-0.54,sector:'Tech'},
    {sym:'GOOG',name:'Alphabet Inc. (C)',price:177.40,chg:-0.88,pct:-0.49,sector:'Tech'},
    {sym:'AMZN',name:'Amazon.com',price:198.60,chg:2.45,pct:1.25,sector:'Tech'},
    {sym:'NVDA',name:'NVIDIA Corp.',price:875.40,chg:18.20,pct:2.12,sector:'Semiconductors'},
    {sym:'META',name:'Meta Platforms',price:527.30,chg:6.80,pct:1.31,sector:'Tech'},
    {sym:'TSLA',name:'Tesla Inc.',price:248.50,chg:-5.30,pct:-2.09,sector:'Auto'},
    {sym:'NFLX',name:'Netflix Inc.',price:628.40,chg:8.90,pct:1.44,sector:'Streaming'},
    {sym:'ADBE',name:'Adobe Inc.',price:548.60,chg:4.30,pct:0.79,sector:'Tech'},
    {sym:'CRM',name:'Salesforce Inc.',price:295.40,chg:2.10,pct:0.72,sector:'SaaS'},
    {sym:'ORCL',name:'Oracle Corp.',price:128.40,chg:1.80,pct:1.42,sector:'Tech'},
    {sym:'SAP',name:'SAP SE',price:198.60,chg:2.20,pct:1.12,sector:'Enterprise Software'},
    {sym:'NOW',name:'ServiceNow',price:742.80,chg:8.40,pct:1.14,sector:'SaaS'},
    {sym:'SNOW',name:'Snowflake Inc.',price:168.40,chg:3.20,pct:1.94,sector:'Cloud'},
    {sym:'DDOG',name:'Datadog Inc.',price:128.60,chg:2.40,pct:1.90,sector:'Cloud'},
    {sym:'PANW',name:'Palo Alto Networks',price:342.80,chg:4.60,pct:1.36,sector:'Cybersecurity'},
    {sym:'CRWD',name:'CrowdStrike Holdings',price:298.40,chg:5.20,pct:1.77,sector:'Cybersecurity'},
    {sym:'UBER',name:'Uber Technologies',price:82.40,chg:1.20,pct:1.48,sector:'Tech'},
    {sym:'LYFT',name:'Lyft Inc.',price:18.60,chg:0.32,pct:1.75,sector:'Tech'},
    {sym:'ABNB',name:'Airbnb Inc.',price:168.40,chg:2.80,pct:1.69,sector:'Tech'},
    {sym:'SHOP',name:'Shopify Inc.',price:78.40,chg:1.40,pct:1.82,sector:'E-Commerce'},
    {sym:'SQ',name:'Block Inc.',price:76.80,chg:1.20,pct:1.59,sector:'Fintech'},
    {sym:'PYPL',name:'PayPal Holdings',price:62.80,chg:0.40,pct:0.64,sector:'Fintech'},
    {sym:'SPOT',name:'Spotify Technology',price:348.60,chg:5.40,pct:1.57,sector:'Streaming'},
    {sym:'TWLO',name:'Twilio Inc.',price:62.40,chg:0.80,pct:1.30,sector:'Cloud'},
    {sym:'ZM',name:'Zoom Video',price:68.40,chg:-0.80,pct:-1.16,sector:'Tech'},
    {sym:'DOCU',name:'DocuSign Inc.',price:68.80,chg:0.60,pct:0.88,sector:'SaaS'},
    {sym:'WDAY',name:'Workday Inc.',price:248.60,chg:3.20,pct:1.30,sector:'SaaS'},
    {sym:'OKTA',name:'Okta Inc.',price:98.40,chg:1.40,pct:1.44,sector:'Cybersecurity'},
    {sym:'ZS',name:'Zscaler Inc.',price:198.40,chg:2.80,pct:1.43,sector:'Cybersecurity'},
    {sym:'NET',name:'Cloudflare Inc.',price:98.60,chg:1.60,pct:1.65,sector:'Cloud'},
    {sym:'INTC',name:'Intel Corp.',price:30.20,chg:-0.55,pct:-1.79,sector:'Semiconductors'},
    {sym:'AMD',name:'Advanced Micro Devices',price:162.80,chg:3.40,pct:2.13,sector:'Semiconductors'},
    {sym:'QCOM',name:'Qualcomm',price:178.50,chg:1.60,pct:0.91,sector:'Semiconductors'},
    {sym:'AVGO',name:'Broadcom Inc.',price:1424.80,chg:18.40,pct:1.31,sector:'Semiconductors'},
    {sym:'TXN',name:'Texas Instruments',price:198.40,chg:1.80,pct:0.92,sector:'Semiconductors'},
    {sym:'MU',name:'Micron Technology',price:128.60,chg:2.40,pct:1.90,sector:'Semiconductors'},
    {sym:'LRCX',name:'Lam Research',price:868.40,chg:12.40,pct:1.45,sector:'Semiconductors'},
    {sym:'KLAC',name:'KLA Corp.',price:748.60,chg:9.80,pct:1.33,sector:'Semiconductors'},
    {sym:'AMAT',name:'Applied Materials',price:248.60,chg:3.40,pct:1.39,sector:'Semiconductors'},
    {sym:'MRVL',name:'Marvell Technology',price:68.40,chg:1.20,pct:1.79,sector:'Semiconductors'},
    {sym:'ARM',name:'Arm Holdings',price:128.40,chg:2.40,pct:1.91,sector:'Semiconductors'},
    // ── AI & PALANTIR ──
    {sym:'PLTR',name:'Palantir Technologies',price:24.80,chg:0.64,pct:2.65,sector:'AI Software'},
    {sym:'AI',name:'C3.ai Inc.',price:28.40,chg:0.82,pct:2.97,sector:'AI Software'},
    {sym:'SOUN',name:'SoundHound AI',price:6.28,chg:0.18,pct:2.95,sector:'AI'},
    {sym:'IONQ',name:'IonQ Inc.',price:12.40,chg:-0.34,pct:-2.67,sector:'Quantum'},
    {sym:'BBAI',name:'BigBear.ai Holdings',price:3.84,chg:0.12,pct:3.23,sector:'AI'},
    {sym:'RCAT',name:'Red Cat Holdings',price:8.40,chg:0.28,pct:3.45,sector:'AI Defense'},
    // ── FINANCE & BANKING ──
    {sym:'BRK.B',name:'Berkshire Hathaway B',price:386.10,chg:1.20,pct:0.31,sector:'Finance'},
    {sym:'JPM',name:'JPMorgan Chase',price:215.40,chg:0.85,pct:0.40,sector:'Banking'},
    {sym:'BAC',name:'Bank of America',price:38.60,chg:0.40,pct:1.05,sector:'Banking'},
    {sym:'WFC',name:'Wells Fargo',price:58.40,chg:0.60,pct:1.04,sector:'Banking'},
    {sym:'C',name:'Citigroup',price:68.40,chg:0.80,pct:1.19,sector:'Banking'},
    {sym:'GS',name:'Goldman Sachs',price:448.60,chg:4.80,pct:1.08,sector:'Investment Banking'},
    {sym:'MS',name:'Morgan Stanley',price:108.40,chg:1.20,pct:1.12,sector:'Investment Banking'},
    {sym:'V',name:'Visa Inc.',price:279.60,chg:1.15,pct:0.41,sector:'Finance'},
    {sym:'MA',name:'Mastercard Inc.',price:472.50,chg:2.80,pct:0.60,sector:'Finance'},
    {sym:'AXP',name:'American Express',price:228.60,chg:2.40,pct:1.06,sector:'Finance'},
    {sym:'SCHW',name:'Charles Schwab',price:78.40,chg:0.80,pct:1.03,sector:'Finance'},
    {sym:'BLK',name:'BlackRock Inc.',price:848.60,chg:9.20,pct:1.10,sector:'Asset Management'},
    {sym:'SPGI',name:'S&P Global',price:448.60,chg:4.80,pct:1.08,sector:'Finance'},
    {sym:'MCO',name:'Moody\'s Corp.',price:398.40,chg:4.20,pct:1.07,sector:'Finance'},
    {sym:'ICE',name:'Intercontinental Exchange',price:148.60,chg:1.60,pct:1.09,sector:'Finance'},
    {sym:'CME',name:'CME Group',price:228.60,chg:2.40,pct:1.06,sector:'Finance'},
    {sym:'COF',name:'Capital One Financial',price:148.60,chg:1.60,pct:1.09,sector:'Banking'},
    {sym:'USB',name:'U.S. Bancorp',price:48.40,chg:0.40,pct:0.83,sector:'Banking'},
    {sym:'PNC',name:'PNC Financial',price:168.40,chg:1.80,pct:1.08,sector:'Banking'},
    {sym:'TFC',name:'Truist Financial',price:38.60,chg:0.40,pct:1.05,sector:'Banking'},
    {sym:'AIG',name:'American International Group',price:78.40,chg:0.80,pct:1.03,sector:'Insurance'},
    {sym:'MET',name:'MetLife Inc.',price:68.40,chg:0.70,pct:1.04,sector:'Insurance'},
    {sym:'PRU',name:'Prudential Financial',price:118.40,chg:1.20,pct:1.02,sector:'Insurance'},
    {sym:'ALL',name:'Allstate Corp.',price:178.40,chg:1.80,pct:1.02,sector:'Insurance'},
    {sym:'CB',name:'Chubb Ltd.',price:248.60,chg:2.60,pct:1.06,sector:'Insurance'},
    // ── HEALTHCARE ──
    {sym:'JNJ',name:'Johnson & Johnson',price:152.30,chg:-0.45,pct:-0.29,sector:'Healthcare'},
    {sym:'UNH',name:'UnitedHealth Group',price:524.80,chg:3.60,pct:0.69,sector:'Healthcare'},
    {sym:'LLY',name:'Eli Lilly & Co.',price:748.60,chg:9.80,pct:1.33,sector:'Pharma'},
    {sym:'PFE',name:'Pfizer Inc.',price:27.40,chg:-0.35,pct:-1.26,sector:'Pharma'},
    {sym:'MRK',name:'Merck & Co.',price:128.40,chg:1.40,pct:1.10,sector:'Pharma'},
    {sym:'ABBV',name:'AbbVie Inc.',price:168.90,chg:0.70,pct:0.42,sector:'Pharma'},
    {sym:'BMY',name:'Bristol-Myers Squibb',price:48.40,chg:-0.20,pct:-0.41,sector:'Pharma'},
    {sym:'AMGN',name:'Amgen Inc.',price:298.40,chg:2.80,pct:0.95,sector:'Biotech'},
    {sym:'GILD',name:'Gilead Sciences',price:84.20,chg:0.35,pct:0.42,sector:'Biotech'},
    {sym:'BIIB',name:'Biogen Inc.',price:198.40,chg:2.20,pct:1.12,sector:'Biotech'},
    {sym:'REGN',name:'Regeneron Pharmaceuticals',price:848.60,chg:9.20,pct:1.10,sector:'Biotech'},
    {sym:'VRTX',name:'Vertex Pharmaceuticals',price:448.60,chg:4.80,pct:1.08,sector:'Biotech'},
    {sym:'MRNA',name:'Moderna Inc.',price:118.40,chg:2.80,pct:2.42,sector:'Biotech'},
    {sym:'ISRG',name:'Intuitive Surgical',price:398.60,chg:4.20,pct:1.07,sector:'Medical Devices'},
    {sym:'ABT',name:'Abbott Laboratories',price:108.40,chg:1.20,pct:1.12,sector:'Medical Devices'},
    {sym:'MDT',name:'Medtronic plc',price:78.40,chg:0.80,pct:1.03,sector:'Medical Devices'},
    {sym:'SYK',name:'Stryker Corp.',price:348.40,chg:3.60,pct:1.05,sector:'Medical Devices'},
    {sym:'BSX',name:'Boston Scientific',price:68.40,chg:0.80,pct:1.18,sector:'Medical Devices'},
    {sym:'CVS',name:'CVS Health',price:62.40,chg:0.60,pct:0.97,sector:'Healthcare Retail'},
    {sym:'CI',name:'Cigna Group',price:328.40,chg:3.40,pct:1.05,sector:'Healthcare'},
    {sym:'HCA',name:'HCA Healthcare',price:348.60,chg:3.60,pct:1.05,sector:'Hospitals'},
    {sym:'TMO',name:'Thermo Fisher Scientific',price:548.60,chg:5.80,pct:1.07,sector:'Life Sciences'},
    {sym:'DHR',name:'Danaher Corp.',price:248.60,chg:2.60,pct:1.06,sector:'Life Sciences'},
    {sym:'IQV',name:'IQVIA Holdings',price:198.40,chg:2.20,pct:1.12,sector:'Healthcare'},
    // ── CONSUMER ──
    {sym:'WMT',name:'Walmart Inc.',price:68.90,chg:0.30,pct:0.44,sector:'Retail'},
    {sym:'AMZN_R',name:'Amazon Retail',price:198.60,chg:2.45,pct:1.25,sector:'E-Commerce'},
    {sym:'TGT',name:'Target Corp.',price:148.40,chg:1.60,pct:1.09,sector:'Retail'},
    {sym:'COST',name:'Costco Wholesale',price:748.60,chg:8.20,pct:1.11,sector:'Retail'},
    {sym:'HD',name:'Home Depot',price:358.20,chg:1.90,pct:0.53,sector:'Retail'},
    {sym:'LOW',name:'Lowe\'s Companies',price:228.60,chg:2.40,pct:1.06,sector:'Retail'},
    {sym:'NKE',name:'Nike Inc.',price:78.40,chg:0.80,pct:1.03,sector:'Consumer'},
    {sym:'SBUX',name:'Starbucks Corp.',price:78.40,chg:-0.80,pct:-1.01,sector:'Consumer'},
    {sym:'MCD',name:'McDonald\'s Corp.',price:298.40,chg:2.80,pct:0.95,sector:'Restaurants'},
    {sym:'YUM',name:'Yum! Brands',price:128.40,chg:1.40,pct:1.10,sector:'Restaurants'},
    {sym:'CMG',name:'Chipotle Mexican Grill',price:2848.60,chg:28.40,pct:1.01,sector:'Restaurants'},
    {sym:'PG',name:'Procter & Gamble',price:163.40,chg:0.55,pct:0.34,sector:'Consumer Staples'},
    {sym:'KO',name:'Coca-Cola Co.',price:62.40,chg:0.40,pct:0.64,sector:'Consumer Staples'},
    {sym:'PEP',name:'PepsiCo Inc.',price:168.40,chg:1.20,pct:0.72,sector:'Consumer Staples'},
    {sym:'PM',name:'Philip Morris International',price:98.40,chg:0.80,pct:0.82,sector:'Consumer Staples'},
    {sym:'MO',name:'Altria Group',price:44.60,chg:0.30,pct:0.68,sector:'Consumer Staples'},
    {sym:'CL',name:'Colgate-Palmolive',price:88.40,chg:0.60,pct:0.68,sector:'Consumer Staples'},
    {sym:'KMB',name:'Kimberly-Clark',price:128.40,chg:1.00,pct:0.78,sector:'Consumer Staples'},
    {sym:'MDLZ',name:'Mondelez International',price:64.40,chg:0.50,pct:0.78,sector:'Consumer Staples'},
    {sym:'GIS',name:'General Mills',price:64.40,chg:-0.30,pct:-0.46,sector:'Consumer Staples'},
    {sym:'CPB',name:'Campbell Soup Co.',price:44.60,chg:0.20,pct:0.45,sector:'Consumer Staples'},
    {sym:'AMZN_C',name:'Amazon Consumer',price:198.60,chg:2.45,pct:1.25,sector:'E-Commerce'},
    {sym:'EBAY',name:'eBay Inc.',price:52.40,chg:0.40,pct:0.77,sector:'E-Commerce'},
    {sym:'ETSY',name:'Etsy Inc.',price:68.40,chg:0.80,pct:1.18,sector:'E-Commerce'},
    // ── ENERGY ──
    {sym:'XOM',name:'ExxonMobil',price:114.20,chg:-1.10,pct:-0.95,sector:'Energy'},
    {sym:'CVX',name:'Chevron Corp.',price:156.70,chg:-0.80,pct:-0.51,sector:'Energy'},
    {sym:'COP',name:'ConocoPhillips',price:118.40,chg:-0.80,pct:-0.67,sector:'Energy'},
    {sym:'SLB',name:'SLB (Schlumberger)',price:48.40,chg:-0.30,pct:-0.62,sector:'Energy Services'},
    {sym:'EOG',name:'EOG Resources',price:128.40,chg:-0.60,pct:-0.47,sector:'Energy'},
    {sym:'PXD',name:'Pioneer Natural Resources',price:248.60,chg:-1.20,pct:-0.48,sector:'Energy'},
    {sym:'OXY',name:'Occidental Petroleum',price:62.40,chg:-0.40,pct:-0.64,sector:'Energy'},
    {sym:'HAL',name:'Halliburton Co.',price:38.40,chg:-0.20,pct:-0.52,sector:'Energy Services'},
    {sym:'BKR',name:'Baker Hughes',price:34.60,chg:-0.20,pct:-0.57,sector:'Energy Services'},
    {sym:'MPC',name:'Marathon Petroleum',price:168.40,chg:-0.80,pct:-0.47,sector:'Energy'},
    {sym:'VLO',name:'Valero Energy',price:148.40,chg:-0.60,pct:-0.40,sector:'Energy'},
    {sym:'PSX',name:'Phillips 66',price:128.60,chg:-0.40,pct:-0.31,sector:'Energy'},
    {sym:'NEE',name:'NextEra Energy',price:74.40,chg:0.80,pct:1.09,sector:'Utilities'},
    {sym:'DUK',name:'Duke Energy',price:98.40,chg:0.80,pct:0.82,sector:'Utilities'},
    {sym:'SO',name:'Southern Company',price:68.40,chg:0.60,pct:0.89,sector:'Utilities'},
    {sym:'D',name:'Dominion Energy',price:48.40,chg:0.40,pct:0.83,sector:'Utilities'},
    {sym:'AEP',name:'American Electric Power',price:88.40,chg:0.80,pct:0.91,sector:'Utilities'},
    {sym:'EXC',name:'Exelon Corp.',price:38.40,chg:0.30,pct:0.79,sector:'Utilities'},
    {sym:'SRE',name:'Sempra',price:78.40,chg:0.70,pct:0.90,sector:'Utilities'},
    // ── INDUSTRIALS ──
    {sym:'GE',name:'GE Aerospace',price:168.40,chg:2.20,pct:1.32,sector:'Aerospace'},
    {sym:'HON',name:'Honeywell International',price:198.40,chg:2.20,pct:1.12,sector:'Industrials'},
    {sym:'CAT',name:'Caterpillar Inc.',price:348.60,chg:3.60,pct:1.05,sector:'Industrials'},
    {sym:'DE',name:'Deere & Company',price:398.40,chg:4.20,pct:1.07,sector:'Industrials'},
    {sym:'MMM',name:'3M Company',price:128.40,chg:1.00,pct:0.78,sector:'Industrials'},
    {sym:'RTX',name:'RTX Corp.',price:98.40,chg:1.20,pct:1.24,sector:'Aerospace & Defence'},
    {sym:'LMT',name:'Lockheed Martin',price:448.60,chg:4.80,pct:1.08,sector:'Defence'},
    {sym:'NOC',name:'Northrop Grumman',price:448.60,chg:4.60,pct:1.04,sector:'Defence'},
    {sym:'GD',name:'General Dynamics',price:248.60,chg:2.60,pct:1.06,sector:'Defence'},
    {sym:'BA',name:'Boeing Co.',price:178.40,chg:-2.40,pct:-1.33,sector:'Aerospace'},
    {sym:'UPS',name:'UPS',price:148.60,chg:1.60,pct:1.09,sector:'Logistics'},
    {sym:'FDX',name:'FedEx Corp.',price:248.60,chg:2.60,pct:1.06,sector:'Logistics'},
    {sym:'CSX',name:'CSX Corp.',price:34.60,chg:0.40,pct:1.17,sector:'Transportation'},
    {sym:'UNP',name:'Union Pacific',price:248.60,chg:2.60,pct:1.06,sector:'Transportation'},
    {sym:'NSC',name:'Norfolk Southern',price:248.60,chg:2.60,pct:1.06,sector:'Transportation'},
    {sym:'EMR',name:'Emerson Electric',price:108.40,chg:1.20,pct:1.12,sector:'Industrials'},
    {sym:'ITW',name:'Illinois Tool Works',price:248.60,chg:2.60,pct:1.06,sector:'Industrials'},
    {sym:'PH',name:'Parker-Hannifin',price:548.60,chg:5.80,pct:1.07,sector:'Industrials'},
    {sym:'ROK',name:'Rockwell Automation',price:248.60,chg:2.60,pct:1.06,sector:'Automation'},
    {sym:'ETN',name:'Eaton Corp.',price:298.60,chg:3.20,pct:1.08,sector:'Industrials'},
    {sym:'CARR',name:'Carrier Global',price:68.40,chg:0.80,pct:1.18,sector:'Industrials'},
    {sym:'OTIS',name:'Otis Worldwide',price:88.40,chg:0.80,pct:0.91,sector:'Industrials'},
    {sym:'GWW',name:'W.W. Grainger',price:1048.60,chg:11.20,pct:1.08,sector:'Industrials'},
    // ── MEDIA & ENTERTAINMENT ──
    {sym:'DIS',name:'Walt Disney Co.',price:112.30,chg:-0.65,pct:-0.58,sector:'Media'},
    {sym:'CMCSA',name:'Comcast Corp.',price:42.40,chg:0.40,pct:0.95,sector:'Media'},
    {sym:'WBD',name:'Warner Bros. Discovery',price:8.40,chg:-0.20,pct:-2.33,sector:'Media'},
    {sym:'PARA',name:'Paramount Global',price:12.40,chg:-0.20,pct:-1.59,sector:'Media'},
    {sym:'T',name:'AT&T Inc.',price:18.60,chg:0.20,pct:1.09,sector:'Telecom'},
    {sym:'VZ',name:'Verizon Communications',price:40.60,chg:0.30,pct:0.74,sector:'Telecom'},
    {sym:'TMUS',name:'T-Mobile US',price:168.40,chg:1.80,pct:1.08,sector:'Telecom'},
    {sym:'EA',name:'Electronic Arts',price:128.40,chg:1.40,pct:1.10,sector:'Gaming'},
    {sym:'TTWO',name:'Take-Two Interactive',price:148.60,chg:1.60,pct:1.09,sector:'Gaming'},
    {sym:'RBLX',name:'Roblox Corp.',price:38.60,chg:0.80,pct:2.12,sector:'Gaming'},
    {sym:'NTES',name:'NetEase Inc.',price:98.40,chg:1.20,pct:1.24,sector:'Gaming'},
    {sym:'LYV',name:'Live Nation Entertainment',price:98.40,chg:1.20,pct:1.24,sector:'Entertainment'},
    // ── GLOBAL GIANTS (Non-US) ──
    {sym:'ASML',name:'ASML Holding',price:848.60,chg:9.20,pct:1.10,sector:'Semiconductors'},
    {sym:'TSM',name:'Taiwan Semiconductor (TSMC)',price:148.60,chg:1.80,pct:1.23,sector:'Semiconductors'},
    {sym:'SAMSUNG',name:'Samsung Electronics',price:68.40,chg:0.80,pct:1.18,sector:'Tech'},
    {sym:'BABA',name:'Alibaba Group',price:78.60,chg:-0.80,pct:-1.01,sector:'E-Commerce'},
    {sym:'BIDU',name:'Baidu Inc.',price:98.40,chg:-1.20,pct:-1.21,sector:'Tech'},
    {sym:'JD',name:'JD.com Inc.',price:28.40,chg:-0.20,pct:-0.70,sector:'E-Commerce'},
    {sym:'PDD',name:'PDD Holdings',price:128.40,chg:1.40,pct:1.10,sector:'E-Commerce'},
    {sym:'NVO',name:'Novo Nordisk',price:98.40,chg:1.20,pct:1.24,sector:'Pharma'},
    {sym:'RHHBY',name:'Roche Holding',price:38.60,chg:0.30,pct:0.78,sector:'Pharma'},
    {sym:'AZN',name:'AstraZeneca',price:68.40,chg:0.80,pct:1.18,sector:'Pharma'},
    {sym:'GSK',name:'GSK plc',price:38.60,chg:0.20,pct:0.52,sector:'Pharma'},
    {sym:'NSRGY',name:'Nestlé S.A.',price:108.40,chg:0.80,pct:0.74,sector:'Consumer Staples'},
    {sym:'LVMUY',name:'LVMH Moët Hennessy',price:168.40,chg:2.20,pct:1.32,sector:'Luxury'},
    {sym:'TM',name:'Toyota Motor',price:198.40,chg:2.20,pct:1.12,sector:'Auto'},
    {sym:'HMC',name:'Honda Motor',price:28.40,chg:0.20,pct:0.71,sector:'Auto'},
    {sym:'STLA',name:'Stellantis N.V.',price:18.40,chg:-0.20,pct:-1.08,sector:'Auto'},
    {sym:'VWAGY',name:'Volkswagen AG',price:14.60,chg:-0.10,pct:-0.68,sector:'Auto'},
    {sym:'BMW',name:'BMW AG',price:38.60,chg:0.30,pct:0.78,sector:'Auto'},
    {sym:'MBGYY',name:'Mercedes-Benz',price:18.40,chg:0.10,pct:0.55,sector:'Auto'},
    {sym:'BP',name:'BP plc',price:34.60,chg:-0.20,pct:-0.58,sector:'Energy'},
    {sym:'SHEL',name:'Shell plc',price:68.60,chg:-0.40,pct:-0.58,sector:'Energy'},
    {sym:'RIO',name:'Rio Tinto',price:68.40,chg:-0.20,pct:-0.29,sector:'Mining'},
    {sym:'BHP',name:'BHP Group',price:48.60,chg:-0.20,pct:-0.41,sector:'Mining'},
    {sym:'GLEN',name:'Glencore plc',price:4.80,chg:-0.04,pct:-0.83,sector:'Mining'},
    {sym:'SAB',name:'Saudi Aramco',price:8.40,chg:-0.04,pct:-0.47,sector:'Energy'},
    {sym:'HSBC',name:'HSBC Holdings',price:42.60,chg:0.40,pct:0.95,sector:'Banking'},
    {sym:'BCS',name:'Barclays plc',price:14.60,chg:0.20,pct:1.39,sector:'Banking'},
    {sym:'ING',name:'ING Group',price:14.60,chg:0.20,pct:1.39,sector:'Banking'},
    {sym:'DB',name:'Deutsche Bank',price:14.60,chg:0.20,pct:1.39,sector:'Banking'},
    {sym:'UBS',name:'UBS Group',price:28.60,chg:0.30,pct:1.06,sector:'Banking'},
    {sym:'CS',name:'Credit Suisse',price:0.90,chg:-0.01,pct:-1.10,sector:'Banking'},
    {sym:'SE',name:'Sea Limited',price:68.60,chg:1.20,pct:1.78,sector:'E-Commerce'},
    {sym:'GRAB',name:'Grab Holdings',price:3.84,chg:0.08,pct:2.13,sector:'Tech'},
    {sym:'INFY',name:'Infosys',price:18.40,chg:0.20,pct:1.10,sector:'IT Services'},
    {sym:'WIT',name:'Wipro Ltd.',price:6.40,chg:0.08,pct:1.27,sector:'IT Services'},
    {sym:'HDB',name:'HDFC Bank',price:58.40,chg:0.60,pct:1.04,sector:'Banking'},
    {sym:'RELIANCE',name:'Reliance Industries',price:28.40,chg:0.30,pct:1.07,sector:'Conglomerate'},
    // ── ETFs ──
    {sym:'SPY',name:'SPDR S&P 500 ETF',price:524.80,chg:3.60,pct:0.69,sector:'ETF'},
    {sym:'QQQ',name:'Invesco QQQ Trust',price:448.60,chg:4.20,pct:0.94,sector:'ETF'},
    {sym:'IWM',name:'iShares Russell 2000 ETF',price:198.60,chg:1.80,pct:0.91,sector:'ETF'},
    {sym:'VOO',name:'Vanguard S&P 500 ETF',price:478.60,chg:3.40,pct:0.71,sector:'ETF'},
    {sym:'VTI',name:'Vanguard Total Market ETF',price:248.60,chg:1.80,pct:0.73,sector:'ETF'},
    {sym:'DIA',name:'SPDR Dow Jones ETF',price:388.60,chg:2.80,pct:0.72,sector:'ETF'},
    {sym:'GLD',name:'SPDR Gold Shares ETF',price:228.60,chg:1.60,pct:0.70,sector:'ETF'},
    {sym:'SLV',name:'iShares Silver Trust ETF',price:26.40,chg:0.30,pct:1.15,sector:'ETF'},
    {sym:'TLT',name:'iShares 20+ Year Treasury ETF',price:94.40,chg:-0.40,pct:-0.42,sector:'ETF'},
    {sym:'HYG',name:'iShares High Yield Bond ETF',price:78.40,chg:0.20,pct:0.26,sector:'ETF'},
    {sym:'ARKK',name:'ARK Innovation ETF',price:48.60,chg:0.80,pct:1.67,sector:'ETF'},
    {sym:'ARKG',name:'ARK Genomic Revolution ETF',price:24.60,chg:0.40,pct:1.65,sector:'ETF'},
    {sym:'BOTZ',name:'Global X Robotics & AI ETF',price:28.60,chg:0.50,pct:1.78,sector:'ETF'},
    {sym:'SOXX',name:'iShares Semiconductor ETF',price:248.60,chg:3.80,pct:1.55,sector:'ETF'},
    {sym:'XLK',name:'Technology Select Sector SPDR',price:218.60,chg:2.40,pct:1.11,sector:'ETF'},
    {sym:'XLF',name:'Financial Select Sector SPDR',price:42.60,chg:0.40,pct:0.95,sector:'ETF'},
    {sym:'XLE',name:'Energy Select Sector SPDR',price:92.40,chg:-0.40,pct:-0.43,sector:'ETF'},
    {sym:'XLV',name:'Health Care Select Sector SPDR',price:148.60,chg:1.20,pct:0.81,sector:'ETF'},
    {sym:'XLI',name:'Industrial Select Sector SPDR',price:128.60,chg:1.40,pct:1.10,sector:'ETF'},
    {sym:'VNQ',name:'Vanguard Real Estate ETF',price:84.20,chg:0.35,pct:0.42,sector:'ETF'},
    {sym:'EEM',name:'iShares MSCI Emerging Markets',price:42.60,chg:0.40,pct:0.95,sector:'ETF'},
    {sym:'EWJ',name:'iShares MSCI Japan ETF',price:68.40,chg:0.60,pct:0.88,sector:'ETF'},
    {sym:'FXI',name:'iShares China Large-Cap ETF',price:28.60,chg:-0.30,pct:-1.04,sector:'ETF'},
    {sym:'INDA',name:'iShares MSCI India ETF',price:52.60,chg:0.60,pct:1.15,sector:'ETF'},
    {sym:'EWZ',name:'iShares MSCI Brazil ETF',price:32.60,chg:-0.30,pct:-0.91,sector:'ETF'},
    {sym:'IEUR',name:'iShares Core MSCI Europe ETF',price:64.60,chg:0.60,pct:0.94,sector:'ETF'},
    {sym:'URA',name:'Global X Uranium ETF',price:28.60,chg:0.50,pct:1.78,sector:'ETF'},
    {sym:'LIT',name:'Global X Lithium & Battery Tech',price:22.60,chg:0.30,pct:1.35,sector:'ETF'},
    {sym:'ICLN',name:'iShares Clean Energy ETF',price:14.60,chg:0.20,pct:1.39,sector:'ETF'},
    {sym:'ROBO',name:'ROBO Global Robotics ETF',price:58.60,chg:0.80,pct:1.38,sector:'ETF'},
  ],
  crypto:[
    {sym:'BTC',name:'Bitcoin',price:68420.50,chg:1240.30,pct:1.85},
    {sym:'ETH',name:'Ethereum',price:3842.20,chg:85.40,pct:2.27},
    {sym:'SOL',name:'Solana',price:178.60,chg:-4.20,pct:-2.30},
    {sym:'BNB',name:'BNB',price:608.40,chg:8.90,pct:1.48},
    {sym:'XRP',name:'Ripple',price:0.628,chg:0.012,pct:1.95},
    {sym:'ADA',name:'Cardano',price:0.485,chg:-0.009,pct:-1.82},
    {sym:'AVAX',name:'Avalanche',price:38.40,chg:1.20,pct:3.23},
    {sym:'DOGE',name:'Dogecoin',price:0.168,chg:0.004,pct:2.44},
    {sym:'DOT',name:'Polkadot',price:7.82,chg:-0.18,pct:-2.25},
    {sym:'LINK',name:'Chainlink',price:14.60,chg:0.42,pct:2.96},
  ],
  forex:[
    {sym:'EUR/USD',name:'Euro / US Dollar',price:1.0842,chg:0.0012,pct:0.11},
    {sym:'GBP/USD',name:'British Pound / USD',price:1.2695,chg:-0.0008,pct:-0.06},
    {sym:'USD/JPY',name:'USD / Japanese Yen',price:154.32,chg:0.48,pct:0.31},
    {sym:'USD/CHF',name:'USD / Swiss Franc',price:0.9012,chg:0.0015,pct:0.17},
    {sym:'AUD/USD',name:'Australian Dollar / USD',price:0.6528,chg:-0.0022,pct:-0.34},
    {sym:'USD/CAD',name:'USD / Canadian Dollar',price:1.3648,chg:0.0018,pct:0.13},
    {sym:'NZD/USD',name:'NZ Dollar / USD',price:0.5982,chg:0.0008,pct:0.13},
    {sym:'EUR/GBP',name:'Euro / British Pound',price:0.8542,chg:0.0010,pct:0.12},
  ],
  indices:[
    {sym:'SPX',name:'S&P 500',price:5248.80,chg:28.40,pct:0.54},
    {sym:'NDX',name:'NASDAQ 100',price:18324.50,chg:142.80,pct:0.79},
    {sym:'DJI',name:'Dow Jones',price:39248.60,chg:185.40,pct:0.47},
    {sym:'VIX',name:'CBOE Volatility',price:13.84,chg:-0.42,pct:-2.94},
    {sym:'FTSE',name:'FTSE 100',price:8248.30,chg:42.10,pct:0.51},
    {sym:'DAX',name:'DAX 40',price:18562.40,chg:86.20,pct:0.47},
    {sym:'N225',name:'Nikkei 225',price:40248.80,chg:328.50,pct:0.82},
  ],
  commodities:[
    {sym:'XAUUSD',name:'Gold',price:2384.20,chg:12.40,pct:0.52},
    {sym:'XAGUSD',name:'Silver',price:28.42,chg:0.38,pct:1.36},
    {sym:'WTIUSD',name:'Crude Oil (WTI)',price:82.48,chg:-0.68,pct:-0.82},
    {sym:'NATGAS',name:'Natural Gas',price:1.842,chg:0.024,pct:1.32},
    {sym:'COPPER',name:'Copper',price:4.428,chg:0.048,pct:1.10},
    {sym:'WHEAT',name:'Wheat',price:548.40,chg:-3.20,pct:-0.58},
  ],
  reits:[
    {sym:'SPG',name:'Simon Property Group',price:148.60,chg:1.20,pct:0.81,type:'Retail REIT'},
    {sym:'PLD',name:'Prologis Inc.',price:118.40,chg:0.85,pct:0.72,type:'Industrial REIT'},
    {sym:'EQIX',name:'Equinix Inc.',price:762.40,chg:6.80,pct:0.90,type:'Data Center REIT'},
    {sym:'AMT',name:'American Tower',price:195.80,chg:1.40,pct:0.72,type:'Infrastructure REIT'},
    {sym:'VNQ',name:'Vanguard Real Estate ETF',price:84.20,chg:0.35,pct:0.42,type:'REIT ETF'},
    {sym:'AVB',name:'AvalonBay Communities',price:218.40,chg:1.80,pct:0.83,type:'Residential REIT'},
  ],
  realestate:[
    {city:'New York',state:'NY · USA',price:892.40,chg:2.40,pct:0.27,vol:'$2.4B'},
    {city:'Los Angeles',state:'CA · USA',price:748.20,chg:-1.20,pct:-0.16,vol:'$1.8B'},
    {city:'Miami',state:'FL · USA',price:524.80,chg:4.80,pct:0.92,vol:'$1.2B'},
    {city:'Austin',state:'TX · USA',price:412.60,chg:-3.40,pct:-0.82,vol:'$0.9B'},
    {city:'Chicago',state:'IL · USA',price:284.20,chg:1.10,pct:0.39,vol:'$0.7B'},
    {city:'Seattle',state:'WA · USA',price:682.40,chg:1.60,pct:0.24,vol:'$1.1B'},
    {city:'London',state:'UK',price:1124.60,chg:3.80,pct:0.34,vol:'$3.2B'},
    {city:'Paris',state:'France',price:896.40,chg:2.10,pct:0.24,vol:'$2.1B'},
    {city:'Berlin',state:'Germany',price:542.80,chg:1.90,pct:0.35,vol:'$1.4B'},
    {city:'Amsterdam',state:'Netherlands',price:718.20,chg:2.40,pct:0.34,vol:'$1.6B'},
    {city:'Zurich',state:'Switzerland',price:1284.60,chg:4.20,pct:0.33,vol:'$1.8B'},
    {city:'Dubai',state:'UAE',price:624.80,chg:8.40,pct:1.36,vol:'$2.8B'},
    {city:'Singapore',state:'Singapore',price:1482.40,chg:5.60,pct:0.38,vol:'$3.6B'},
    {city:'Tokyo',state:'Japan',price:684.20,chg:3.20,pct:0.47,vol:'$2.2B'},
    {city:'Sydney',state:'Australia',price:862.40,chg:2.80,pct:0.33,vol:'$1.9B'},
    {city:'Toronto',state:'Canada',price:748.60,chg:1.40,pct:0.19,vol:'$1.7B'},
  ],
  ai_biotech:[
    {sym:'PLTR',name:'Palantir Technologies',price:24.80,chg:0.64,pct:2.65,sector:'AI'},
    {sym:'AI',name:'C3.ai Inc.',price:28.40,chg:0.82,pct:2.97,sector:'AI'},
    {sym:'SOUN',name:'SoundHound AI',price:6.28,chg:0.18,pct:2.95,sector:'AI'},
    {sym:'IONQ',name:'IonQ Inc.',price:12.40,chg:-0.34,pct:-2.67,sector:'Quantum'},
    {sym:'RXRX',name:'Recursion Pharma',price:8.42,chg:0.28,pct:3.44,sector:'AI Biotech'},
    {sym:'BEAM',name:'Beam Therapeutics',price:24.80,chg:0.68,pct:2.82,sector:'Gene Editing'},
    {sym:'CRSP',name:'CRISPR Therapeutics',price:48.20,chg:1.40,pct:2.99,sector:'Gene Editing'},
    {sym:'EDIT',name:'Editas Medicine',price:6.82,chg:-0.18,pct:-2.57,sector:'Gene Editing'},
  ]
};

// Price simulation — fluctuates every 3s
function simulatePrices(){
  Object.values(ASSETS).forEach(arr=>{
    arr.forEach(a=>{
      const drift=(Math.random()-0.495)*0.003;
      a.price=parseFloat((a.price*(1+drift)).toFixed(a.price>100?2:a.price>1?4:6));
      a.chg=parseFloat((a.chg+(a.price*drift)).toFixed(a.price>100?2:4));
      a.pct=parseFloat(((a.chg/a.price)*100).toFixed(2));
    });
  });
  document.dispatchEvent(new Event('prices:update'));
}
setInterval(simulatePrices,3000);

// ── AUTH STATE ──────────────────────────────────────────────────
const Auth={
  users: JSON.parse(localStorage.getItem('orident_users')||'{}'),
  currentUser: JSON.parse(localStorage.getItem('orident_current')||'null'),
  save(){localStorage.setItem('orident_users',JSON.stringify(this.users));localStorage.setItem('orident_current',JSON.stringify(this.currentUser));},
  register(data){
    if(this.users[data.email]) return {ok:false,msg:'Email already registered.'};
    this.users[data.email]={...data,balance:10000,portfolio:{},watchlist:[],transactions:[],deposits:[],withdrawals:[],joinDate:new Date().toISOString()};
    this.currentUser=this.users[data.email];
    this.save();
    return {ok:true};
  },
  login(email,pass){
    const u=this.users[email];
    if(!u||u.password!==pass) return {ok:false,msg:'Invalid email or password.'};
    this.currentUser=u;
    this.save();
    return {ok:true};
  },
  logout(){this.currentUser=null;this.save();window.location.href='login.html';},
  isLoggedIn(){return !!this.currentUser;},
  requireAuth(){if(!this.isLoggedIn()){window.location.href='login.html';return false;}return true;},
  updateUser(updates){
    Object.assign(this.currentUser,updates);
    this.users[this.currentUser.email]=this.currentUser;
    this.save();
  }
};

// ── TOAST ──────────────────────────────────────────────────────
function showToast(msg,type='info',icon='ℹ️',dur=4000){
  let c=document.getElementById('toast-container');
  if(!c){c=document.createElement('div');c.id='toast-container';document.body.appendChild(c);}
  const t=document.createElement('div');
  t.className='toast '+(type==='success'?'success':type==='error'?'error':'');
  t.innerHTML=`<span>${icon}</span><span style="flex:1">${msg}</span><button class="toast-close" onclick="this.parentElement.remove()">✕</button>`;
  c.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';t.style.transition='opacity .3s';setTimeout(()=>t.remove(),300);},dur);
}

// ── FORMAT HELPERS ─────────────────────────────────────────────
function fmt(n,dec=2){return Number(n).toLocaleString('en-US',{minimumFractionDigits:dec,maximumFractionDigits:dec});}
function fmtUSD(n){return '$'+fmt(n);}
function fmtPct(n){return (n>=0?'+':'')+fmt(n)+'%';}
function pctClass(n){return n>=0?'up':'dn';}
function pctBadge(n){return `<span class="badge badge-${n>=0?'up':'down'}">${n>=0?'▲':'▼'} ${Math.abs(n).toFixed(2)}%</span>`;}

// ── SPARKLINE ─────────────────────────────────────────────────
function sparkline(canvasId,isUp){
  const c=document.getElementById(canvasId);
  if(!c)return;
  const ctx=c.getContext('2d');
  const pts=Array.from({length:20},(_,i)=>30+Math.random()*40+(isUp?i*1.2:-i*0.8)+Math.random()*10);
  const min=Math.min(...pts),max=Math.max(...pts),range=max-min||1;
  const w=c.width,h=c.height;
  ctx.clearRect(0,0,w,h);
  const color=isUp?'#00C27A':'#F03A47';
  ctx.beginPath();
  pts.forEach((p,i)=>{const x=(i/(pts.length-1))*w,y=h-(((p-min)/range)*(h-4))-2;i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);});
  ctx.strokeStyle=color;ctx.lineWidth=1.5;ctx.stroke();
}

// ── TICKER BUILD ──────────────────────────────────────────────
function buildTicker(){
  const el=document.getElementById('ticker-inner');
  if(!el)return;
  const items=[...ASSETS.stocks.slice(0,10),...ASSETS.crypto.slice(0,5),...ASSETS.indices,...ASSETS.forex.slice(0,4)];
  const html=items.map(a=>`<span class="ticker-item"><span class="sym">${a.sym}</span><span>${a.price>100?fmt(a.price,2):fmt(a.price,4)}</span><span class="${pctClass(a.pct)}">${fmtPct(a.pct)}</span></span><span class="ticker-sep">·</span>`).join('');
  el.innerHTML=html+html;
}
document.addEventListener('DOMContentLoaded',buildTicker);

// ── ASSET SVG ICONS ──────────────────────────────────────────────
const ASSET_ICONS={
  'AAPL':'<svg viewBox="0 0 24 24" fill="currentColor" style="color:#1C1C1E;width:20px;height:20px"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>',
  'MSFT':'<svg viewBox="0 0 24 24" fill="currentColor" style="width:20px;height:20px"><path d="M11.5 2.75H2.75V11.5H11.5V2.75z" fill="#F35325"/><path d="M21.25 2.75H12.5V11.5H21.25V2.75z" fill="#81BC06"/><path d="M11.5 12.5H2.75V21.25H11.5V12.5z" fill="#05A6F0"/><path d="M21.25 12.5H12.5V21.25H21.25V12.5z" fill="#FFBA08"/></svg>',
  'GOOGL':'<svg viewBox="0 0 24 24" fill="none" style="width:20px;height:20px"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>',
  'AMZN':'<svg viewBox="0 0 24 24" fill="currentColor" style="color:#FF9900;width:20px;height:20px"><path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.44-2.186 1.44-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.699-3.182v.683zm3.186 7.705c-.209.189-.512.201-.745.074-1.052-.872-1.238-1.276-1.814-2.106-1.733 1.767-2.96 2.297-5.201 2.297-2.656 0-4.72-1.638-4.72-4.921 0-2.563 1.391-4.307 3.37-5.163 1.715-.756 4.109-.891 5.942-1.099v-.41c0-.753.06-1.642-.384-2.294-.385-.579-1.124-.82-1.775-.82-1.205 0-2.277.618-2.54 1.897-.054.285-.261.567-.549.58l-3.064-.33c-.259-.058-.548-.266-.472-.66C5.849 2.517 8.717 1.5 11.273 1.5c1.305 0 3.01.348 4.039 1.336C16.716 4.011 16.657 5.744 16.657 7.5v5.288c0 1.59.661 2.29 1.284 3.149.221.308.27.677-.014.904l-2.783 2.354v-.4z"/></svg>',
  'NVDA':'<svg viewBox="0 0 24 24" fill="currentColor" style="color:#76B900;width:20px;height:20px"><path d="M4.5 9.5V6h5v3.5H8v5h1.5V18h-5v-3.5H6v-5H4.5zm7 0V6h8.5L22 8.5v7L19.5 18H11.5v-3.5H13v-5h-1.5zm3 0v5H18l1-1v-3l-1-1h-3.5z"/></svg>',
  'META':'<svg viewBox="0 0 24 24" fill="currentColor" style="color:#1877F2;width:20px;height:20px"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  'TSLA':'<svg viewBox="0 0 24 24" fill="currentColor" style="color:#CC0000;width:20px;height:20px"><path d="M12 2.5C8.5 2.5 5.5 4 3.5 6.5H20.5C18.5 4 15.5 2.5 12 2.5zM12 5c2 0 3.8.7 5.2 1.8H6.8C8.2 5.7 10 5 12 5zM12 8l-8 2v1.5l8-2 8 2V10l-8-2zm0 3l-4 1v8l4 1 4-1v-8l-4-1zm-2 2h4v6h-4v-6z"/></svg>',
  'BRK.B':'<svg viewBox="0 0 24 24" fill="none" style="width:20px;height:20px"><rect x="2" y="6" width="20" height="12" rx="2" fill="#D93025"/><text x="12" y="15" text-anchor="middle" font-size="6" font-weight="bold" fill="white" font-family="sans-serif">BRK</text></svg>',
  'JPM':'<svg viewBox="0 0 24 24" fill="none" style="width:20px;height:20px"><rect x="2" y="4" width="20" height="16" rx="2" fill="#003087"/><path d="M6 8h12M6 12h12M6 16h7" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>',
  'V':'<svg viewBox="0 0 24 24" fill="none" style="width:20px;height:20px"><rect x="1" y="4" width="22" height="16" rx="3" fill="#1A1F71"/><text x="12" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="#F7B600" font-family="sans-serif" font-style="italic">VISA</text></svg>',
  'MA':'<svg viewBox="0 0 24 24" fill="none" style="width:20px;height:20px"><circle cx="9" cy="12" r="7" fill="#EB001B"/><circle cx="15" cy="12" r="7" fill="#F79E1B" opacity="0.85"/></svg>',
  'NFLX':'<svg viewBox="0 0 24 24" fill="currentColor" style="color:#E50914;width:20px;height:20px"><path d="M5 2v20l7-2.5L19 22V2h-3.5v14L12 14.5 8.5 16V2H5z"/></svg>',
  'BTC':'<svg viewBox="0 0 24 24" fill="currentColor" style="color:#F7931A;width:20px;height:20px"><path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"/></svg>',
  'ETH':'<svg viewBox="0 0 24 24" fill="currentColor" style="color:#627EEA;width:20px;height:20px"><path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/></svg>',
  'SOL':'<svg viewBox="0 0 24 24" fill="currentColor" style="color:#9945FF;width:20px;height:20px"><path d="M4 17.5h14.5l-2.5 2.5H2L4 17.5zm0-6h16l-2.5 2.5H1.5L4 11.5zm14.5-8L16 6H1.5l2.5-2.5H18.5z"/></svg>',
  'BNB':'<svg viewBox="0 0 24 24" fill="currentColor" style="color:#F3BA2F;width:20px;height:20px"><path d="M12 2L6 8l2 2 4-4 4 4 2-2L12 2zM4 12l2 2 2-2-2-2-2 2zm8 8l-4-4-2 2 6 6 6-6-2-2-4 4zm8-8l-2-2-2 2 2 2 2-2zm-8-2l-2 2 2 2 2-2-2-2z"/></svg>',
  'XRP':'<svg viewBox="0 0 24 24" fill="currentColor" style="color:#00AAE4;width:20px;height:20px"><path d="M6 3L3 6l3.5 3.5C7.9 10.9 9.9 11.7 12 11.7s4.1-.8 5.5-2.2L21 6l-3-3-3.5 3.5c-.8.8-1.9 1.2-2.5 1.2s-1.7-.4-2.5-1.2L6 3zm12 18l3-3-3.5-3.5c-1.4-1.4-3.4-2.2-5.5-2.2s-4.1.8-5.5 2.2L3 18l3 3 3.5-3.5c.8-.8 1.9-1.2 2.5-1.2s1.7.4 2.5 1.2L18 21z"/></svg>',
  'EUR/USD':'<svg viewBox="0 0 24 24" fill="none" style="width:20px;height:20px"><circle cx="12" cy="12" r="10" fill="#003087"/><text x="12" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="white" font-family="sans-serif">€</text></svg>',
  'GBP/USD':'<svg viewBox="0 0 24 24" fill="none" style="width:20px;height:20px"><circle cx="12" cy="12" r="10" fill="#CF142B"/><text x="12" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="white" font-family="sans-serif">£</text></svg>',
  'USD/JPY':'<svg viewBox="0 0 24 24" fill="none" style="width:20px;height:20px"><circle cx="12" cy="12" r="10" fill="#BC002D"/><text x="12" y="16" text-anchor="middle" font-size="9" font-weight="bold" fill="white" font-family="sans-serif">¥</text></svg>',
  'USD/CHF':'<svg viewBox="0 0 24 24" fill="none" style="width:20px;height:20px"><circle cx="12" cy="12" r="10" fill="#FF0000"/><text x="12" y="16" text-anchor="middle" font-size="9" font-weight="bold" fill="white" font-family="sans-serif">Fr</text></svg>',
  'AUD/USD':'<svg viewBox="0 0 24 24" fill="none" style="width:20px;height:20px"><circle cx="12" cy="12" r="10" fill="#00008B"/><text x="12" y="16" text-anchor="middle" font-size="8" font-weight="bold" fill="white" font-family="sans-serif">A$</text></svg>',
  'USD/CAD':'<svg viewBox="0 0 24 24" fill="none" style="width:20px;height:20px"><circle cx="12" cy="12" r="10" fill="#FF0000"/><text x="12" y="16" text-anchor="middle" font-size="7" font-weight="bold" fill="white" font-family="sans-serif">CA$</text></svg>',
  'SPX':'<svg viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" style="width:20px;height:20px"><polyline points="3 17 7 11 11 14 15 7 21 7"/><line x1="3" y1="20" x2="21" y2="20"/></svg>',
  'NDX':'<svg viewBox="0 0 24 24" fill="none" stroke="#0066CC" stroke-width="2" stroke-linecap="round" style="width:20px;height:20px"><polyline points="3 17 7 10 11 14 15 6 21 6"/><line x1="3" y1="20" x2="21" y2="20"/></svg>',
  'DJI':'<svg viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" style="width:20px;height:20px"><polyline points="3 18 7 11 11 15 15 7 21 7"/><line x1="3" y1="21" x2="21" y2="21"/><circle cx="21" cy="7" r="2" fill="#333"/></svg>',
  'VIX':'<svg viewBox="0 0 24 24" fill="none" stroke="#D93025" stroke-width="2" stroke-linecap="round" style="width:20px;height:20px"><path d="M2 12 L6 6 L10 16 L14 8 L18 14 L22 10"/></svg>',
  'FTSE':'<svg viewBox="0 0 24 24" fill="none" style="width:20px;height:20px"><circle cx="12" cy="12" r="10" fill="#CF142B"/><text x="12" y="15" text-anchor="middle" font-size="6" font-weight="bold" fill="white" font-family="sans-serif">FTSE</text></svg>',
  'DAX':'<svg viewBox="0 0 24 24" fill="none" style="width:20px;height:20px"><circle cx="12" cy="12" r="10" fill="#111"/><text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="#FFCC00" font-family="sans-serif">DAX</text></svg>',
  'N225':'<svg viewBox="0 0 24 24" fill="none" style="width:20px;height:20px"><circle cx="12" cy="12" r="10" fill="#BC002D"/><circle cx="12" cy="12" r="4" fill="white"/></svg>',
  'XAUUSD':'<svg viewBox="0 0 24 24" fill="currentColor" style="color:#CFB53B;width:20px;height:20px"><path d="M12 2L9.5 8H2l5.5 4-2 7 6.5-4.5 6.5 4.5-2-7L22 8h-7.5L12 2z"/></svg>',
  'XAGUSD':'<svg viewBox="0 0 24 24" fill="currentColor" style="color:#A8A9AD;width:20px;height:20px"><circle cx="12" cy="12" r="9"/><text x="12" y="16" text-anchor="middle" font-size="8" font-weight="bold" fill="white" font-family="sans-serif">Ag</text></svg>',
  'WTIUSD':'<svg viewBox="0 0 24 24" fill="currentColor" style="color:#333;width:20px;height:20px"><path d="M12 3c0 0-4 4-4 8a4 4 0 0 0 8 0c0-4-4-8-4-8z"/><rect x="10" y="17" width="4" height="4" rx="1"/></svg>',
  'NATGAS':'<svg viewBox="0 0 24 24" fill="none" stroke="#E85D04" stroke-width="2" stroke-linecap="round" style="width:20px;height:20px"><path d="M8.5 14c.5-3 2.5-5 3.5-9 1 4 3 6 3.5 9a7 7 0 0 1-7 0z"/></svg>',
  'COPPER':'<svg viewBox="0 0 24 24" fill="currentColor" style="color:#B87333;width:20px;height:20px"><circle cx="12" cy="12" r="9"/><text x="12" y="16" text-anchor="middle" font-size="8" font-weight="bold" fill="white" font-family="sans-serif">Cu</text></svg>',
  'WHEAT':'<svg viewBox="0 0 24 24" fill="none" stroke="#C4A000" stroke-width="1.8" stroke-linecap="round" style="width:20px;height:20px"><line x1="12" y1="22" x2="12" y2="5"/><path d="M8 8c0-2 2-3 4-3s4 1 4 3-2 3-4 3-4-1-4-3zm-3 5c0-2 1.5-3 3-3s3 1 3 3-1.5 3-3 3-3-1-3-3zm6 0c0-2 1.5-3 3-3s3 1 3 3-1.5 3-3 3-3-1-3-3z"/></svg>',
  'SPG':'<svg viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" style="width:20px;height:20px"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><rect x="9" y="12" width="6" height="9"/></svg>',
  'PLD':'<svg viewBox="0 0 24 24" fill="none" stroke="#E85D04" stroke-width="2" style="width:20px;height:20px"><rect x="2" y="8" width="20" height="12" rx="1"/><path d="M6 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/></svg>',
  'EQIX':'<svg viewBox="0 0 24 24" fill="none" stroke="#E85D04" stroke-width="1.8" style="width:20px;height:20px"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  'AMT':'<svg viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" style="width:20px;height:20px"><line x1="12" y1="2" x2="12" y2="22"/><path d="M5 8h14M7 14h10"/></svg>',
  'VNQ':'<svg viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" style="width:20px;height:20px"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="7 10 12 15 17 10"/></svg>',
  'AVB':'<svg viewBox="0 0 24 24" fill="none" stroke="#0891B2" stroke-width="2" style="width:20px;height:20px"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>',
  'PLTR':'<svg viewBox="0 0 24 24" fill="currentColor" style="color:#000;width:20px;height:20px"><path d="M5 3h5v18H5V3zm9 0h5v18h-5V3z"/></svg>',
  'AI':'<svg viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" style="width:20px;height:20px"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>',
  'SOUN':'<svg viewBox="0 0 24 24" fill="none" stroke="#0891B2" stroke-width="2" stroke-linecap="round" style="width:20px;height:20px"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
  'IONQ':'<svg viewBox="0 0 24 24" fill="none" stroke="#0891B2" stroke-width="1.8" style="width:20px;height:20px"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>',
  'RXRX':'<svg viewBox="0 0 24 24" fill="none" stroke="#E85D04" stroke-width="1.8" style="width:20px;height:20px"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>',
  'BEAM':'<svg viewBox="0 0 24 24" fill="none" stroke="#9945FF" stroke-width="1.8" stroke-linecap="round" style="width:20px;height:20px"><path d="M4 4c4 4 4 8 0 12M8 4c4 4 4 8 0 12M12 4c4 4 4 8 0 12M16 4c4 4 4 8 0 12M20 4c0 4-4 8-4 12"/></svg>',
  'CRSP':'<svg viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" style="width:20px;height:20px"><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>',
  'EDIT':'<svg viewBox="0 0 24 24" fill="none" stroke="#D93025" stroke-width="2" style="width:20px;height:20px"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  'MRNA':'<svg viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round" style="width:20px;height:20px"><path d="M4 4c4 4 4 8 0 12M8 2c4 4 4 8 0 12M16 2c-4 4-4 8 0 12M20 4c-4 4-4 8 0 12"/></svg>',
  'GILD':'<svg viewBox="0 0 24 24" fill="none" stroke="#1A8C5B" stroke-width="2" stroke-linecap="round" style="width:20px;height:20px"><path d="M12 22V12M12 12C12 7 17 4 17 4M12 12C12 7 7 4 7 4"/><circle cx="12" cy="12" r="2"/></svg>',
  'ABBV':'<svg viewBox="0 0 24 24" fill="none" stroke="#1A6BFF" stroke-width="2" style="width:20px;height:20px"><circle cx="12" cy="12" r="9"/><path d="M9 8l3 8 3-8" stroke-linecap="round"/><line x1="10" y1="13" x2="14" y2="13" stroke-linecap="round"/></svg>',
  'PFE':'<svg viewBox="0 0 24 24" fill="none" style="width:20px;height:20px"><circle cx="12" cy="12" r="10" fill="#0093D0"/><text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="white" font-family="sans-serif">PFE</text></svg>',
  'JNJ':'<svg viewBox="0 0 24 24" fill="none" style="width:20px;height:20px"><circle cx="12" cy="12" r="10" fill="#CC0000"/><text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="white" font-family="sans-serif">J&J</text></svg>',
  'default':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:20px;height:20px"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>'
};
function getAssetIcon(sym){return ASSET_ICONS[sym]||ASSET_ICONS['default'];}
