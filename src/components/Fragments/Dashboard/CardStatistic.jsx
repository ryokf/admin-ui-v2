import { expensesStatistics } from "../../../data/expenses";
import Card from "../../Elements/Card";
import BarsDataset from "../../Elements/BarChart";

const CardStatistic = () => {
    // eslint-disable-next-line no-unused-vars
    // const expensesStatisticCard = expensesStatistics.map((expensesStatistic) => (<div key={expensesStatistic.id}>{expensesStatistic.date}</div>));

    return (
        <Card 
            variant="md:col-span-2 min-h-max" 
            title="Statistics"
            desc={
            <div className="h-72">
                <select className="font-bold text-lg ring-0 focus:outline-none bg-transparent">
                    <option value="">Weekly Comparison</option>
                </select>
                <BarsDataset desc={expensesStatistics}/>
            </div>
        } />
    )
}

export default CardStatistic