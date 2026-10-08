import { AddItemDialog } from "./components/AddItemDialog";
import { ItemList } from "./components/ItemList";
import { Footer } from "./components/Footer";
import { OverviewCards } from "./components/OverviewCards";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CategoryCards } from "./components/CategoryCards";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header Layout wrapper */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Expenditure Dashboard
              </h1>
              <p className="text-muted-foreground">
                Track your everyday expenses and budget easily.
              </p>
            </div>
            <AddItemDialog />
            <br></br>
          </div>
          <div>
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="category">By Category</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <OverviewCards />
                <br></br>
                <ItemList />
              </TabsContent>
              <TabsContent value="category">
                <Card>
                  <CardHeader>
                    <CardTitle>By Category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CategoryCards />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Put OverviewCards and CategoryCards under DashboardTabs */}
          {/* And then use DashboardTabs here instead */}
        </div>
      </main>

      {/* Footer stays at the very bottom of the viewport if content is short */}
      <Footer />
    </div>
  );
}
