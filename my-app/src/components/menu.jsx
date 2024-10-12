import "@/components/menu.css"
import Link from "next/link";
export default function Chat(){
    return(
        <>        
            <Link className="link" href="/chat">Chat</Link>               
            <Link className="link" href="/universidades">Universidad</Link>
            <Link className="link" href="/usuarios">Usuarios</Link>
        </>
    );
}