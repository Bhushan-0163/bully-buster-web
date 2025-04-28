
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

const mockData = [
  { category: 'Hate Speech', count: 45 },
  { category: 'Harassment', count: 32 },
  { category: 'Threats', count: 28 },
  { category: 'Discrimination', count: 25 },
  { category: 'Bullying', count: 38 },
];

const Statistics = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Detection Statistics</h2>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Types of Cyberbullying Detected</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ChartContainer
                config={{
                  primary: {
                    color: "#9b87f5",
                  },
                }}
              >
                <BarChart data={mockData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <ChartTooltip />
                  <Bar dataKey="count" fill="var(--color-primary)" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
