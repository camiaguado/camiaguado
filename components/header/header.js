import style from './header.module.css';
import Link from 'next/link';

export default function header() {

    return(
        <header className={style.header}>
            <div className='max-width-container'>
                <h2>
                <Link href='/'>Cami Aguado</Link>
                </h2>
                <ul>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='https://github.com/camiaguado'>
                    GitHub
                    </Link>
                </li>
                </ul>
            </div>
        </header>
    )
    
}