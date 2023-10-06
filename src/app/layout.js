//1. Import Area
import '../../public/assets/vendor/bootstrap/css/bootstrap.min.css'
import '../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../../public/assets/vendor/boxicons/css/boxicons.min.css'
import '../../public/assets/vendor/quill/quill.snow.css'
import '../../public/assets/vendor/quill/quill.bubble.css'
import '../../public/assets/vendor/remixicon/remixicon.css'
import '../../public/assets/vendor/simple-datatables/style.css'
import '../../public/assets/css/style.css'

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard - NiceAdmin Bootstrap Template',
  description: '',
}


//2.defination area
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
