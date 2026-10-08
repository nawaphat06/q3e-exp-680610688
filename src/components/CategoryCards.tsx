import { useItemStore } from "@/store/dataStore";
import { categoryOptions } from "@/types/datatypes";
import {
  Utensils,
  Car,
  Book,
  Lightbulb,
  Gamepad2,
  MoreHorizontal,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap: Record<string, React.ReactNode> = {
  Food: <Utensils className="h-4 w-4 text-muted-foreground" />,
  Transport: <Car className="h-4 w-4 text-muted-foreground" />,
  Education: <Book className="h-4 w-4 text-muted-foreground" />,
  Utilities: <Lightbulb className="h-4 w-4 text-muted-foreground" />,
  Entertainment: <Gamepad2 className="h-4 w-4 text-muted-foreground" />,
  Other: <MoreHorizontal className="h-4 w-4 text-muted-foreground" />,
};

export function CategoryCards() {
  const expenses = useItemStore((state) => state.expenses);

  return (
    <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {categoryOptions.map((category) => {
        const categoryExpenses = expenses.filter(
          (expense) => expense.category === category.value,
        );

        const categoryTotal = categoryExpenses.reduce(
          (acc, item) => acc + item.amount,
          0,
        );

        return (
          <Card key={category.value}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {category.label}
              </CardTitle>
              {iconMap[category.label] || iconMap["Other"]}
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">
                ฿
                {categoryTotal.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
              <p className="text-xs text-muted-foreground">
                {categoryExpenses.length}{" "}
                {categoryExpenses.length === 1 ? "transaction" : "transactions"}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
