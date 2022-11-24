import Layout, { siteTitle } from '../components/layout/layout';

const animation = [
    { index: 1, name: 'Animacion 1', src: 'https://www.youtube.com/embed/psysTLzr2_o' },
    { index: 2, name: 'Animacion 2', src: 'https://www.youtube.com/embed/psysTLzr2_o' },
    { index: 3, name: 'Animacion 3', src: 'https://www.youtube.com/embed/psysTLzr2_os' },
    { index: 4, name: 'Animacion 4', src: 'https://www.youtube.com/embed/psysTLzr2_o' },
  ]

export default function Animations({Animations}) {
  return (
    <Layout>
        <div className="grid gap-4 grid-cols-2">    
        {animation.map((item) =>(
            <div className="ow-span-3">
                <iframe src={item.src} title={item.name} key={item.index} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        ))}
        </div>

    </Layout>
  );
}
