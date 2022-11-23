import style from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';


export default function header() {

    return(
        <header className={style.header}>
            <div className='max-width-container'>      
                
                <nav>
                    <div>
                        <a href="/"><h1 className={utilStyles.headingMd}>camiaguado</h1></a>
                    </div>
                    <ul>
                        <li>
                            <a href='/animacion'>Asi me divierto</a>
                        </li>
                        <li>
                            <a href='https://github.com/camiaguado'>
                            GitHub
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
    
}