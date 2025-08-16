import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Plus, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
  avatar?: string;
  isOnline?: boolean;
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    name: "Alex Johnson",
    lastMessage: "Hey! How's the project going?",
    timestamp: "2m",
    unreadCount: 2,
    avatar: "/placeholder.svg",
    isOnline: true,
  },
  {
    id: "2",
    name: "Sarah Chen",
    lastMessage: "Thanks for the help yesterday 👍",
    timestamp: "1h",
    avatar: "/placeholder.svg",
    isOnline: true,
  },
  {
    id: "3",
    name: "Dev Team",
    lastMessage: "Mike: Ready for the standup?",
    timestamp: "3h",
    unreadCount: 5,
    avatar: "/placeholder.svg",
  },
  {
    id: "4",
    name: "Emma Wilson",
    lastMessage: "Let's catch up this weekend!",
    timestamp: "1d",
    avatar: "/placeholder.svg",
    isOnline: false,
  },
  {
    id: "5",
    name: "Project Alpha",
    lastMessage: "Lisa: Updated the design files",
    timestamp: "2d",
    avatar: "/placeholder.svg",
  },
];

interface ConversationSidebarProps {
  selectedConversationId?: string;
  onConversationSelect: (id: string) => void;
}

export function ConversationSidebar({ selectedConversationId, onConversationSelect }: ConversationSidebarProps) {
  return (
    <div className="w-80 h-full bg-gradient-sidebar border-r border-card-border flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-card-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">Messages</h2>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search conversations..."
            className="pl-10 bg-input border-input-border focus:border-input-focus text-foreground"
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {mockConversations.map((conversation) => (
          <div
            key={conversation.id}
            onClick={() => onConversationSelect(conversation.id)}
            className={`p-4 cursor-pointer transition-all duration-200 border-b border-card-border/50 hover:bg-sidebar-hover ${
              selectedConversationId === conversation.id 
                ? "bg-sidebar-active/20 border-l-4 border-l-primary-glow" 
                : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="relative">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={conversation.avatar} />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {conversation.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {conversation.isOnline && (
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-success rounded-full border-2 border-sidebar"></div>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-foreground truncate">
                    {conversation.name}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {conversation.timestamp}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground truncate">
                    {conversation.lastMessage}
                  </p>
                  {conversation.unreadCount && (
                    <span className="bg-primary-glow text-primary-foreground text-xs font-medium px-2 py-1 rounded-full min-w-[20px] text-center">
                      {conversation.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}