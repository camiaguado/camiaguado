import Layout, { siteTitle } from '../components/layout/layout';

const animation = [
    { index: 1, name: 'El banco libre', src: 'https://www.youtube.com/embed/psysTLzr2_o' },
    { index: 2, name: 'Huevo resfriado', src: 'https://www.youtube.com/embed/iqmWB2uCn88' },
    { index: 3, name: 'Huevo resfriado', src: 'https://www.youtube.com/embed/iqmWB2uCn88' },
    { index: 4, name: 'Huevo resfriado', src: 'https://www.youtube.com/embed/iqmWB2uCn88' },
  ]

export default function Animations({Animations}) {
  return (
    <Layout>
        <div className="grid gap-4 grid-cols-2 space-y-4">    
        {animation.map((item) =>(
          
            <div className="ow-span-3">
                <h3 className="uppercase text-lg pb-4">{item.name}</h3>
                <iframe src={item.src} title={item.name} key={item.index} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        ))}
        </div>

    </Layout>
  );
}
