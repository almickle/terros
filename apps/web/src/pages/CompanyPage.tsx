import { Card } from '@terros/ui';

export function CompanyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Our Company</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering the future of smart terrarium technology with innovative solutions that blend
            nature and technology seamlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">
              To create intelligent, sustainable ecosystems that bring the beauty of nature into
              modern living spaces, while making plant care effortless and enjoyable for everyone.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-300">
              To become the global leader in smart gardening solutions, transforming how people
              interact with and care for indoor plants through cutting-edge technology and
              thoughtful design.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-center mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Innovation',
                description: 'Constantly pushing boundaries in smart gardening technology.',
              },
              {
                title: 'Sustainability',
                description: 'Committed to eco-friendly practices and materials.',
              },
              {
                title: 'Quality',
                description: 'Delivering premium products that exceed expectations.',
              },
              {
                title: 'Customer Focus',
                description: 'Putting our customers at the heart of everything we do.',
              },
              {
                title: 'Integrity',
                description: 'Conducting business with honesty and transparency.',
              },
              {
                title: 'Passion',
                description: 'Driven by our love for plants and technology.',
              },
            ].map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CompanyPage;
