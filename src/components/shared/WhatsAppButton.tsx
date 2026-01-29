import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
    const handleClick = () => {
        window.open('https://wa.me/5511999999999', '_blank');
    }

    return ( 
        <button onClick={handleClick} className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:[#20BA5A] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-110">
            <MessageCircle size={28} className='group-hover:scale-110 transition-transform' />
            <span className='absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse'></span>
        </button>
     );
}
 
export default WhatsAppButton;