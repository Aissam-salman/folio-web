import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Profile from "@/components/profile";
import Name3D from "@/components/threeName/Name3D";
import TextJp from "@/components/TextJp";

export default function Home() {
    // @ts-ignore
    return (
        <main className="relative min-h-screen min-w-full overflow-hidden">
            <Navbar/>
            <Name3D/>
            <Footer/>
            <Profile/>
            <TextJp>ありがとう！</TextJp>
        </main>
    );
}