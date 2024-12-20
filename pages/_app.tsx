import type { AppProps } from 'next/app'
import { ParallaxProvider } from 'react-scroll-parallax'
import 'tailwindcss/tailwind.css'
import '../src/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}

export default MyApp 