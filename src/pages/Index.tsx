import { useState } from "react";
import { ConversationSidebar } from "@/components/ConversationSidebar";
import { ChatArea } from "@/components/ChatArea";

const Index = () => {
  const [selectedConversationId, setSelectedConversationId] = useState<string>("1");

  return (
    <div className="h-screen bg-background flex overflow-hidden">
      <ConversationSidebar 
        selectedConversationId={selectedConversationId}
        onConversationSelect={setSelectedConversationId}
      />
      <ChatArea 
        conversationName="Alex Johnson"
        conversationAvatar="/placeholder.svg"
        isOnline={true}
      />
    </div>
  );
};

export default Index;
