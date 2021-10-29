import Head from 'next/head';
import data from './data.json';

export default function Home() {
  return (
    <div>
      {
        data.data.map(
            (item) => (
                <div>
                  <h3>
                    {item.name}
                  </h3>
                  <div>
                    {item.message}
                  </div>
                </div>
            )
        )
      }
    </div>
  )
}
