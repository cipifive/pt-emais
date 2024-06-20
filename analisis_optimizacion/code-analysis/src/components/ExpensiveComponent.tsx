import { FC, useMemo } from "react"
import { ExpensiveComponentProps, Item } from "../models/expensive-component";

export const ExpensiveComponent: FC<ExpensiveComponentProps> = ({ data }):JSX.Element => {

    const processData = (data: Item[]) => {
        return data.map((item: Item) => ({ ...item, processed: true }));
    };

    const processedData:Item[] = useMemo(() => processData(data),[data])

    return (
        <div className="expensive-component__wrapper">
            {
                processedData.map((item: Item) => (<div key={item.id}>{item.name}</div>))
            }
        </div>
    );
};