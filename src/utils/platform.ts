import PLATFORM from "@/contents/platform.json"

export const getWhatsappNumber = () => {
    const key = "whatsapp"
    const wa = PLATFORM.contacts.find(item => item.id === key)
    if(!wa) return;

    return wa?.value;
}