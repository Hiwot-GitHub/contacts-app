interface ContactCardProps {
  name: string;
  email: string;
  phone: string;
  website: string;
}

export default function ContactCard({ name, email, phone, website }: ContactCardProps) {
  return (
    <div className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-gray-700">{phone}</p>
      <p className="text-gray-700">{website}</p>
    </div>
  );
}
