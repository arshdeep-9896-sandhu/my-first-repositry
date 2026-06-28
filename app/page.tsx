import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Business</h1>
      
      <section className="mb-8">
        <p className="text-lg mb-4">
          Professional services tailored to your needs.
        </p>
        <Button>
          Contact Us
        </Button>
      </section>

      <section className="border-t pt-8">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard 
            title="Consulting" 
            description="Expert advice for your business needs"
          />
          <ServiceCard 
            title="Development" 
            description="Custom solutions built to last"
          />
          <ServiceCard 
            title="Support" 
            description="Ongoing assistance for your operations"
          />
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
