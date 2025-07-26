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
      items: [
        "Bharti Airtel mentions 'strategic partnerships'",
        "L&T filed disclosure on 'business restructuring'",
        "Asian Paints announced 'strategic review'",
      ],
    },
    {
      category: "C-Suite Movements",
      count: 3,
      items: [
        "Ex-McKinsey partner joins Mahindra as Strategy Head",
        "Former JP Morgan MD appointed at Bajaj Finance",
        "New CFO at Tech Mahindra from PwC",
      ],
    },
    {
      category: "Media Speculation",
      count: 4,
      items: [
        "Economic Times: 'Tata Group considering sale of...'",
        "Mint: 'Foreign PE firm in talks with...'",
        "Business Standard: 'Merger talks between...'",
      ],
    },
    {
      category: "Foreign Entry Signals",
      count: 2,
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
    if (confidence >= 80) return "text-emerald-600";
    if (confidence >= 60) return "text-blue-600";
    return "text-slate-500";
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
                className="bg-amber-100 px-1.5 py-0.5 rounded-md border border-amber-400/50"
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
    <Card className="p-6 border border-border bg-card shadow-sm">
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">M&A Intelligence Search</h2>
          <p className="text-sm text-muted-foreground">
            Search across filings, transcripts, and media for M&A opportunities
          </p>
        </div>

        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder='e.g., "strategic review" + "external advisors" + "last 30 days"'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-sm"
            />
          </div>
          <Button className="h-12 px-6 text-sm">Search</Button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground">
            Recent searches:
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
              className="text-xs h-7 px-3 cursor-pointer"
            >
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
              className="text-xs h-7 px-3 cursor-pointer"
            >
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
              className="text-xs h-7 px-3 cursor-pointer"
            >
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
              className="text-xs h-7 px-3 cursor-pointer"
            >
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
              className="text-xs h-7 px-3 cursor-pointer"
            >
              Investment bank engagements
            </Button>
          </div>
        </div>

        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filter) => (
              <Badge
                key={filter}
                variant="secondary"
                className="cursor-pointer"
                onClick={() => removeFilter(filter)}
              >
                {filter.replace("-", " ")} ×
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Card>
  );

  const DealSignalMonitor = () => (
    <div className="space-y-8">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="h-5 w-5" />
        <h2 className="text-lg font-semibold">M&A Signal Monitor</h2>
      </div>

      <div className="space-y-6">
        {signals.map((signal, index) => (
          <div
            key={index}
            className={`border rounded-lg p-4 space-y-3 transition-all duration-300 ${
              signal.confidence >= 80
                ? "bg-emerald-50/30 border-emerald-400 shadow-sm hover:bg-emerald-50/60 hover:shadow-md hover:border-emerald-500"
                : "border-border hover:bg-accent/30"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-semibold cursor-pointer hover:text-primary transition-colors">
                  {signal.company}
                </h3>
                <Badge variant="outline" className="text-xs">
                  {signal.assessment}
                </Badge>
                <Badge
                  variant="default"
                  className={`text-xs font-medium ${getConfidenceColor(
                    signal.confidence
                  )} bg-opacity-10`}
                >
                  {signal.confidence}% confidence
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{signal.date}</span>
                <span>•</span>
                <span>{signal.sources.length} sources</span>
                <span>•</span>
                <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-medium text-slate-900 underline decoration-1 underline-offset-2 cursor-pointer hover:text-primary transition-colors">
                {signal.summary}
              </p>
              <div className="pt-2">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <HighlightedText text={signal.context} />
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1">
              {signal.sources.map((source, sourceIndex) => (
                <Badge key={sourceIndex} variant="outline" className="text-xs">
                  {source.type}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const DailyBriefingWidget = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Daily M&A Briefing</h2>
        </div>
        <Button variant="ghost" size="sm">
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              Today&apos;s Intelligence
            </span>
            <Badge variant="secondary">14 new signals</Badge>
          </div>

          {briefingItems.map((section, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-sm">{section.category}</h4>
                <Badge variant="outline" className="text-xs">
                  {section.count}
                </Badge>
              </div>
              <div className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <p
                    key={itemIndex}
                    className="text-xs text-muted-foreground pl-2 border-l-2 border-muted/50"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="flex gap-2 pt-2">
            <Button size="sm" className="flex-1">
              <Mail className="h-3 w-3 mr-1" />
              Email Report
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 bg-transparent"
            >
              <Download className="h-3 w-3 mr-1" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <SidebarProvider>
      <Sidebar className="border-r">
        <SidebarHeader className="border-b px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <TrendingUp className="h-4 w-4" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">M&A Intelligence</h1>
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
                    <SidebarMenuButton asChild isActive={item.current}>
                      <a href="#" className="flex items-center gap-3">
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
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
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex items-center gap-2 flex-1">
            <div>
              <h2 className="text-lg font-semibold">Good evening, Anand!</h2>
              <p className="text-xs text-muted-foreground">
                Welcome back to your M&A dashboard
              </p>
            </div>
          </div>
          <div className="relative group ml-16">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              <span className="absolute -top-2 -right-2 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                3
              </span>
            </Button>
            <div className="absolute right-0 top-full mt-2 w-80 bg-popover border border-border rounded-lg shadow-md z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="p-2">
                <div className="flex items-center justify-between px-2 py-1.5">
                  <span className="text-sm font-medium">Notifications</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-xs"
                  >
                    Mark all read
                  </Button>
                </div>
                <Separator />
                <div className="py-1">
                  <div className="flex items-start gap-3 px-2 py-1.5 rounded-sm hover:bg-accent cursor-pointer">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">New signal detected</p>
                      <p className="text-xs text-muted-foreground">
                        Tata Motors shows high M&A potential
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 px-2 py-1.5 rounded-sm hover:bg-accent cursor-pointer">
                    <div className="h-2 w-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Watchlist alert</p>
                      <p className="text-xs text-muted-foreground">
                        Reliance Industries filed new disclosure
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        4 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 px-2 py-1.5 rounded-sm hover:bg-accent cursor-pointer">
                    <div className="h-2 w-2 bg-orange-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        Daily briefing ready
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Your morning M&A report is available
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        6 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="px-2 py-1.5">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-xs justify-start"
                  >
                    View all notifications
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 space-y-12 p-8">
          <SmartSearchBar />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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
