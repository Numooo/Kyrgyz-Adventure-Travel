import {Header} from "@/components/Header";
import {HeroSection} from "@/app/main/HeroSection";
import {ProgramsSection} from "@/app/main/ProgramsSection";
import {ForWhoSection} from "@/app/main/ForWhoSection";
import {JoinSection} from "@/app/main/JoinSection";
import {StatsSection} from "@/app/main/StatsSection";
import {PaymentSection} from "@/app/main/PaymentSection";
import {GiftSection} from "@/app/main/GiftSection";
import {GroupTravelSection} from "@/app/main/GroupTravelSection";
import {FAQSection} from "@/app/main/FAQSection";
import {NewsletterSection} from "@/app/main/NewsletterSection";
import {Footer} from "@/components/Footer";

export default function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <HeroSection />
            <ProgramsSection />
            <ForWhoSection />
            <JoinSection />
            <StatsSection />
            <PaymentSection />
            <GiftSection />
            <GroupTravelSection />
            <FAQSection />
            <NewsletterSection />
            <Footer />
        </div>
    );
}
