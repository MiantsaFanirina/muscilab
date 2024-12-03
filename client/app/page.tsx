import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <div className={'w-full min-h-screen flex items-center justify-center p-6 lg:p-40'}>
        <div>
            <h1 className={'text-5xl font-bold'}>MusicLab,</h1>
            <h1 className={'text-5xl'}>Unite Through Music: Your Creative Space to Share, Learn, and Connect!</h1>
            <h3 className={'text-3xl text-gray-500 mb-3'}>Discover a vibrant community of music lovers. Share your talent, collaborate with others, and learn
                music theory all in one place.</h3>
            <div>
                <Link href={'/login'} className={'mr-3'}><Button>Login now</Button></Link>
                or <Link href={'/register'} className={'underline'}> Register here</Link>
            </div>
        </div>
    </div>
  );
}
