import {Header} from "@/components/Header";
import {HeroSection} from "@/app/main/HeroSection";
import ProgramsSection from "@/app/main/ProgramsSection";
import {ForWhoSection} from "@/app/main/ForWhoSection";
import {JoinSection} from "@/app/main/JoinSection";
import {StatsSection} from "@/components/StatsSection";
import {PaymentSection} from "@/app/main/PaymentSection";
import {GiftSection} from "@/app/main/GiftSection";
import {GroupTravelSection} from "@/app/main/GroupTravelSection";
import {FAQSection} from "@/app/main/FAQSection";
import {NewsletterSection} from "@/app/main/NewsletterSection";
import {Footer} from "@/components/Footer";

export default function App() {
    return (
        <div className="min-h-screen bg-black">
            <Header />
            <HeroSection />
            <ProgramsSection />
            <div className={"bg-white rounded-[50px] py-20"}>
                <ForWhoSection />
                <JoinSection />
                <StatsSection />
                <PaymentSection />
                <GiftSection />
            </div>
            <GroupTravelSection />
            <FAQSection />
            <NewsletterSection />
            <Footer />
        </div>
    );
}
