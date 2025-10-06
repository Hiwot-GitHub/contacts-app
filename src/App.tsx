import { useEffect, useState } from "react";
import ContactCard from "./components/ContactCard";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

export default function App() {
  const [groupedContacts, setGroupedContacts] = useState<Record<string, Contact[]>>({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: Contact[]) => {
        // Sort alphabetically
        const sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
        // Group by first letter
        const grouped: Record<string, Contact[]> = {};
        sorted.forEach((contact) => {
          const firstLetter = contact.name[0].toUpperCase();
          if (!grouped[firstLetter]) grouped[firstLetter] = [];
          grouped[firstLetter].push(contact);
        });
        setGroupedContacts(grouped);
      });
  }, []);

  return (
    <div className="min-h-screen bg-amber-50 p-4 sm:p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Contacts</h1>
      <div className="max-w-2xl mx-auto overflow-hidden">
        {Object.keys(groupedContacts).map((letter) => (
          <div key={letter}>
            <div className="px-4 py-2 text-gray-700 font-semibold sticky">
              {letter}
            </div>
            <div className="flex flex-col gap-2 px-2 py-2">
              {groupedContacts[letter].map((contact) => (
                <ContactCard key={contact.id} {...contact} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
