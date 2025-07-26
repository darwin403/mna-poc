"use client";

import { useState } from "react";
import {
  Bell,
  Search,
  Settings,
  TrendingUp,
  FileText,
  Target,
  BarChart3,
  AlertTriangle,
  Users,
  Filter,
  Save,
  ExternalLink,
  Mail,
  Download,
  RefreshCw,
  ArrowUpRight,
  Sparkles,
  Clock,
  Building2,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Mock data
  const watchlistCompanies = [
    { name: "Tata Motors", signals: 3, lastActivity: "2h ago" },
    { name: "Reliance Industries", signals: 1, lastActivity: "4h ago" },
    { name: "HDFC Bank", signals: 2, lastActivity: "1d ago" },
    { name: "Infosys", signals: 0, lastActivity: "2d ago" },
    { name: "Wipro", signals: 1, lastActivity: "3d ago" },
  ];

  const navigation = [
    { name: "Dashboard", icon: BarChart3, current: true },
    { name: "Deal Signals", icon: AlertTriangle, current: false },
    { name: "Search & Analytics", icon: Search, current: false },
    { name: "Reports", icon: FileText, current: false },
    { name: "Settings", icon: Settings, current: false },
  ];

  const signals = [
    {
      company: "Tata Motors",
      assessment: "High M&A Potential",
      confidence: 92,
      summary:
        "Multiple strategic restructuring indicators detected across recent filings",
      context:
        "Q3 earnings call showed **47% increase** in mentions of 'strategic review' and 'business transformation' compared to Q2. Board resolution filed 2 hours ago authorizes engagement of external advisors for 'comprehensive business evaluation.' Investor presentation reveals **3x increase** in capital allocation for 'strategic initiatives' with specific mention of 'exploring inorganic growth opportunities.' **Trading window restrictions** implemented for senior management, which historically precede major announcements by 2-3 weeks.",
      sources: [
        { type: "BSE Filing", name: "Reg 30 Disclosure", date: "2h ago" },
        { type: "Earnings Call", name: "Q3 Transcript", date: "1d ago" },
        {
          type: "Investor Presentation",
          name: "Strategy Update",
          date: "3d ago",
        },
      ],
      date: "2 hours ago",
      color: "success",
    },
    {
      company: "Reliance Industries",
      assessment: "High M&A Potential",
      confidence: 88,
      summary: "Leadership changes and strategic committee formation signals",
      context:
        "New Chief Legal Officer appointed with **15-year M&A background from Goldman Sachs**, replacing internal candidate. Strategic Planning Committee formed with explicit mandate to 'evaluate inorganic growth opportunities' and 'assess strategic partnerships.' Board resolution shows **40% increase** in legal budget allocation for 'transaction advisory services.' Media reports indicate **engagement of two investment banks** for 'strategic review,' with Economic Times citing sources familiar with 'major acquisition plans in digital commerce space.'",
      sources: [
        { type: "BSE Filing", name: "Reg 30 Disclosure", date: "4h ago" },
        { type: "Legal Changes", name: "Board Resolution", date: "6h ago" },
        { type: "Media Coverage", name: "Economic Times", date: "1d ago" },
      ],
      date: "4 hours ago",
      color: "success",
    },
    {
      company: "HDFC Bank",
      assessment: "Moderate Interest",
      confidence: 65,
      summary: "Organizational restructuring and capital allocation changes",
      context:
        "Board approved organizational restructuring creating new 'Strategic Initiatives' division with **25% of senior management reassigned**. Q4 earnings call shows **3x increase** in mentions of 'portfolio optimization' and 'asset quality review.' Capital allocation increased by **₹2,500 crore** for 'strategic initiatives' without specific details, representing 15% of total provisions. However, management explicitly denied any 'immediate M&A plans' during analyst Q&A, suggesting this may be internal restructuring rather than acquisition preparation.",
      sources: [
        { type: "BSE Filing", name: "Reg 30 Disclosure", date: "1d ago" },
        { type: "Earnings Call", name: "Q4 Transcript", date: "2d ago" },
      ],
      date: "1 day ago",
      color: "neutral",
    },
    {
      company: "Infosys",
      assessment: "Moderate Interest",
      confidence: 58,
      summary: "Management commentary suggests inorganic growth focus",
      context:
        "Q3 earnings call reveals **67% increase** in mentions of 'acquisitions,' 'strategic partnerships,' and 'inorganic growth' compared to previous quarters. CEO specifically mentioned 'actively evaluating **3-4 acquisition targets** in digital transformation space.' Analyst Day presentation showed **40% increase** in M&A budget allocation and new 'Strategic Acquisitions' team formation. However, Mint report indicates internal resistance to large acquisitions, with board members expressing preference for 'bolt-on acquisitions under $500M.' Timeline suggests 6-12 month evaluation period before any significant transaction.",
      sources: [
        { type: "Earnings Call", name: "Q3 Transcript", date: "2d ago" },
        { type: "Investor Presentation", name: "Analyst Day", date: "1w ago" },
        { type: "Media Coverage", name: "Mint Report", date: "3d ago" },
      ],
      date: "2 days ago",
      color: "neutral",
    },
  ];

  const briefingItems = [
    {
      category: "Reg 30 Disclosures",
      count: 5,
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      items: [
        "Bharti Airtel mentions 'strategic partnerships'",
        "L&T filed disclosure on 'business restructuring'",
        "Asian Paints announced 'strategic review'",
      ],
    },
    {
      category: "C-Suite Movements",
      count: 3,
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      items: [
        "Ex-McKinsey partner joins Mahindra as Strategy Head",
        "Former JP Morgan MD appointed at Bajaj Finance",
        "New CFO at Tech Mahindra from PwC",
      ],
    },
    {
      category: "Media Speculation",
      count: 4,
      icon: AlertTriangle,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      items: [
        "Economic Times: 'Tata Group considering sale of...'",
        "Mint: 'Foreign PE firm in talks with...'",
        "Business Standard: 'Merger talks between...'",
      ],
    },
    {
      category: "Foreign Entry Signals",
      count: 2,
      icon: Building2,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      items: [
        "German automotive supplier eyes India entry",
        "US pharma giant mentions India expansion",
      ],
    },
  ];

  // Helper functions
  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  const getAssessmentIcon = (assessment: string) => {
    if (assessment.includes("High")) {
      return <TrendingUp className="h-4 w-4 text-emerald-600" />;
    }
    return <FileText className="h-4 w-4 text-slate-500" />;
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80)
      return "text-emerald-600 bg-emerald-50 border-emerald-200";
    if (confidence >= 60) return "text-blue-600 bg-blue-50 border-blue-200";
    return "text-slate-600 bg-slate-50 border-slate-200";
  };

  const HighlightedText = ({ text }: { text: string }) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return (
      <>
        {parts.map((part, index) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            const content = part.slice(2, -2);
            return (
              <span
                key={index}
                className="font-semibold text-slate-900 bg-gradient-to-r from-amber-100 to-amber-50 px-1.5 py-0.5 rounded border border-amber-300/50"
              >
                {content}
              </span>
            );
          }
          return part;
        })}
      </>
    );
  };

  const SmartSearchBar = () => (
    <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-slate-50 to-white">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <CardContent className="p-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                M&A Intelligence Search
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Search across filings, transcripts, and media for M&A
              opportunities
            </p>
          </div>

          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder='e.g., "strategic review" + "external advisors" + "last 30 days"'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-base border-2 focus:border-primary/50 transition-colors"
              />
            </div>
            <Button className="h-14 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
              Search
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Popular searches
            </span>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() =>
                  setSearchQuery(
                    '"strategic review" + "external advisors" + "board resolution"'
                  )
                }
                className="text-xs h-8 px-4 bg-slate-100 hover:bg-slate-200 border border-slate-200"
              >
                <Search className="h-3 w-3 mr-1.5" />
                Strategic reviews with advisors
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() =>
                  setSearchQuery(
                    '"new legal officer" + "M&A background" + "appointment"'
                  )
                }
                className="text-xs h-8 px-4 bg-slate-100 hover:bg-slate-200 border border-slate-200"
              >
                <Users className="h-3 w-3 mr-1.5" />
                M&A-focused legal hires
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() =>
                  setSearchQuery(
                    '"trading window" + "restrictions" + "senior management"'
                  )
                }
                className="text-xs h-8 px-4 bg-slate-100 hover:bg-slate-200 border border-slate-200"
              >
                <AlertTriangle className="h-3 w-3 mr-1.5" />
                Trading window restrictions
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() =>
                  setSearchQuery(
                    '"inorganic growth" + "acquisition targets" + "earnings call"'
                  )
                }
                className="text-xs h-8 px-4 bg-slate-100 hover:bg-slate-200 border border-slate-200"
              >
                <Target className="h-3 w-3 mr-1.5" />
                Acquisition discussions
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() =>
                  setSearchQuery(
                    '"investment bank" + "strategic review" + "engagement"'
                  )
                }
                className="text-xs h-8 px-4 bg-slate-100 hover:bg-slate-200 border border-slate-200"
              >
                <Building2 className="h-3 w-3 mr-1.5" />
                Investment bank engagements
              </Button>
            </div>
          </div>

          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {activeFilters.map((filter) => (
                <Badge
                  key={filter}
                  variant="secondary"
                  className="cursor-pointer bg-primary/10 hover:bg-primary/20 text-primary border-primary/20"
                  onClick={() => removeFilter(filter)}
                >
                  {filter.replace("-", " ")} ×
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const DealSignalMonitor = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold">M&A Signal Monitor</h2>
            <p className="text-sm text-muted-foreground">
              Real-time deal intelligence
            </p>
          </div>
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter signals" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Signals</SelectItem>
            <SelectItem value="high">High Potential</SelectItem>
            <SelectItem value="moderate">Moderate Interest</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {signals.map((signal, index) => (
          <Card
            key={index}
            className={`overflow-hidden transition-all duration-300 ${
              signal.confidence >= 80
                ? "border-emerald-200 bg-gradient-to-r from-emerald-50/50 to-white shadow-md hover:shadow-xl hover:border-emerald-300"
                : "border-slate-200 hover:shadow-lg hover:border-slate-300"
            }`}
          >
            <div
              className={`h-1 ${
                signal.confidence >= 80
                  ? "bg-gradient-to-r from-emerald-500 to-emerald-400"
                  : "bg-gradient-to-r from-slate-300 to-slate-200"
              }`}
            />
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-slate-900 hover:text-primary cursor-pointer transition-colors">
                      {signal.company}
                    </h3>
                    <Badge
                      variant="outline"
                      className={`${
                        signal.confidence >= 80
                          ? "border-emerald-500 text-emerald-700 bg-emerald-50"
                          : "border-slate-300"
                      }`}
                    >
                      {getAssessmentIcon(signal.assessment)}
                      <span className="ml-1.5">{signal.assessment}</span>
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{signal.date}</span>
                    </div>
                    <span>•</span>
                    <span>{signal.sources.length} sources verified</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      Confidence
                    </p>
                    <p
                      className={`text-3xl font-bold ${
                        signal.confidence >= 80
                          ? "text-emerald-600"
                          : "text-slate-600"
                      }`}
                    >
                      {signal.confidence}%
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-slate-100"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-lg font-semibold text-slate-800 leading-tight">
                  {signal.summary}
                </p>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <HighlightedText text={signal.context} />
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex flex-wrap gap-2">
                  {signal.sources.map((source, sourceIndex) => (
                    <Badge
                      key={sourceIndex}
                      variant="secondary"
                      className="text-xs bg-white border-slate-200 hover:bg-slate-50 cursor-pointer"
                    >
                      <FileText className="h-3 w-3 mr-1" />
                      {source.type}
                    </Badge>
                  ))}
                </div>
                <Button variant="link" size="sm" className="text-primary">
                  View full analysis
                  <ChevronRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const DailyBriefingWidget = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Daily M&A Briefing</h2>
            <p className="text-sm text-muted-foreground">
              Today's intelligence summary
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="hover:bg-slate-100">
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      <Card className="overflow-hidden border-0 shadow-lg">
        <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        <CardContent className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">Today's Intelligence</span>
            </div>
            <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
              14 new signals
            </Badge>
          </div>

          <div className="space-y-4">
            {briefingItems.map((section, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg ${section.bgColor}`}>
                      <section.icon className={`h-4 w-4 ${section.color}`} />
                    </div>
                    <h4 className="font-semibold text-sm">
                      {section.category}
                    </h4>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {section.count}
                  </Badge>
                </div>
                <div className="space-y-2 pl-8">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start gap-2 group cursor-pointer"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-slate-300 mt-1.5 group-hover:bg-primary transition-colors" />
                      <p className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Separator />

          <div className="flex gap-3">
            <Button className="flex-1 shadow-md hover:shadow-lg transition-all">
              <Mail className="h-4 w-4 mr-2" />
              Email Report
            </Button>
            <Button variant="outline" className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <SidebarProvider>
      <Sidebar className="border-r bg-slate-50">
        <SidebarHeader className="border-b bg-white px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold">M&A Intelligence</h1>
              <p className="text-xs text-muted-foreground">
                Deal Flow Dashboard
              </p>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigation.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      asChild
                      isActive={item.current}
                      className={
                        item.current
                          ? "bg-primary/10 text-primary hover:bg-primary/20"
                          : ""
                      }
                    >
                      <a href="#" className="flex items-center gap-3">
                        <item.icon className="h-4 w-4" />
                        <span className="font-medium">{item.name}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-white px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex items-center gap-2 flex-1">
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Good evening, Anand!
              </h2>
              <p className="text-sm text-muted-foreground">
                3 new high-confidence signals detected today
              </p>
            </div>
          </div>
          <div className="relative group">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                3
              </span>
            </Button>
            <div className="absolute right-0 top-full mt-2 w-96 bg-white border rounded-xl shadow-2xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-semibold">Notifications</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 px-3 text-xs"
                  >
                    Mark all read
                  </Button>
                </div>
                <Separator className="mb-3" />
                <div className="space-y-2">
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                    <div className="h-2 w-2 bg-emerald-500 rounded-full mt-2 animate-pulse"></div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">
                        New high-confidence signal
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Tata Motors shows 92% M&A potential
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">Watchlist alert</p>
                      <p className="text-xs text-muted-foreground">
                        Reliance Industries filed new disclosure
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        4 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                    <div className="h-2 w-2 bg-orange-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">
                        Daily briefing ready
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Your morning M&A report is available
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        6 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <Separator className="my-3" />
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-xs justify-center"
                >
                  View all notifications
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 space-y-8 p-8 bg-slate-50/50">
          <SmartSearchBar />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <DealSignalMonitor />
            </div>
            <div>
              <DailyBriefingWidget />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
