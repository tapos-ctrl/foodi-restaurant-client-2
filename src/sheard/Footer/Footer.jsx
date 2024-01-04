import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-neutral-100">
            <footer className="footer p-10 text-base-content  container mx-auto px-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 ">
                <div className="w-full flex lg:justify-start justify-center">
                    <aside>
                    <Link to={'/'} className='btn btn-ghost text-xl hover:bg-transparent'><img src='https://i.ibb.co/WyHzN7r/F.png' className="bg-primary-bg p-2 rounded-lg " alt="" /> <img src='https://i.ibb.co/q7JH38g/oodi.png'  alt="" /></Link>
                        <p className="text-base font-semibold text-neutral-500">Savor the artistry where<br/> every dish is a culinary <br/>masterpiece</p>
                    </aside> 
                </div>
                <nav className=" w-full flex-col justify-center lg:justify-start">
                    <header className="font-bold text-lg  text-neutral-950">Main Menu</header> 
                    <Link  className="hover:bg-transparent text-base font-semibold text-neutral-500" to={'/'}>Home</Link>
                    <Link  className="hover:bg-transparent text-base font-semibold text-neutral-500" to={'/allFood'}>All Food</Link>
                    <Link  className="hover:bg-transparent text-base font-semibold text-neutral-500" to={'/blog'}>Blog</Link>
                    <Link  className="hover:bg-transparent text-base font-semibold text-neutral-500" to={'/signUP'}>Sign Up</Link>
                </nav> 
                <nav className="w-full flex-col justify-center lg:justify-start">
                    <header className="font-bold text-lg">Contact Us</header> 
                    <a className="link link-hover text-base font-semibold text-neutral-500">example@email.com</a>
                    <a className="link link-hover text-base font-semibold text-neutral-500">+64 958 248 966</a>
                </nav>
                
            </footer>
            <footer className="text-center py-10"><p>Copyright 2023 Dscode | All rights reserved</p></footer>
        </div>
    );
};

export default Footer;