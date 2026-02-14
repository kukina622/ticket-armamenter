import { Activity } from "lucide-react";
import { PlatformCard } from "@/components/platform/platform-card";
import type { TicketPlatform } from "@/types/platform";

export default function Dashboard() {
  const platforms: TicketPlatform[] = [
    {
      id: "tixcraft",
      name: "tixCraft",
      url: "https://tixcraft.com",
      description: "演唱會、音樂節、舞台劇等大型活動售票平台",
      category: "綜合售票",
      features: ["演唱會", "音樂節", "舞台劇", "體育賽事"],
      logo: "T",
      color: "199 89% 48%"
    }
  ];
  return (
    <div className="p-6">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">售票平台</h2>
            <span className="text-xs text-muted-foreground">
              ({platforms.length} 個平台)
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {platforms.map((platform) => (
          <PlatformCard
            platform={platform}
            taskCount={Math.floor(Math.random() * 10)}
            onSelect={() => console.log(`Selected platform: ${platform.name}`)}
            key={platform.id}
          />
        ))}
      </div>
    </div>
  );
}
