"use client";
import { useEffect, useState } from "react";

const CostCalculator = () => {
  const [timeSpent, setTimeSpent] = useState<string>("");
  const [frequency, setFrequency] = useState<string>("");
  const [hourlyCost, setHourlyCost] = useState<string>("");
  const [delegateCost, setDelegateCost] = useState<string>("");
  const [totalCost, setTotalCost] = useState<number | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const savedData = localStorage.getItem("costCalculatorData");
    if (savedData) {
      const { timeSpent, frequency, hourlyCost, delegateCost } =
        JSON.parse(savedData);
      setTimeSpent(timeSpent);
      setFrequency(frequency);
      setHourlyCost(hourlyCost);
      setDelegateCost(delegateCost);
    }
  }, []);

  useEffect(() => {
    if (timeSpent && frequency && hourlyCost && delegateCost) {
      const cost =
        (Number(timeSpent) / 60) * Number(frequency) * Number(hourlyCost);
      setTotalCost(cost);
      setErrors({});
    } else {
      setTotalCost(null);
    }
  }, [timeSpent, frequency, hourlyCost, delegateCost]);

  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};

    if (!timeSpent || Number(timeSpent) <= 0) {
      newErrors.timeSpent = "Please enter a valid time";
    }
    if (!frequency || Number(frequency) <= 0) {
      newErrors.frequency = "Please enter a valid frequency";
    }
    if (!hourlyCost || Number(hourlyCost) <= 0) {
      newErrors.hourlyCost = "Please enter a valid cost";
    }
    if (!delegateCost || Number(delegateCost) <= 0) {
      newErrors.delegateCost = "Please enter a valid delegation cost";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="card w-full bg-base-200 shadow-xl border-2 border-primary/5 rounded-md">
      <div className="card-body">
        <h1 className="card-title justify-center text-2xl font-bold mb-6 text-base-content border-b-2 border-primary pb-2">
          Calculator
        </h1>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Time spent per task (minutes)</span>
          </label>
          <input
            type="number"
            placeholder="Enter time"
            value={timeSpent}
            onChange={(e) => setTimeSpent(e.target.value)}
            className={`input input-bordered tabular-nums w-full ${
              errors.timeSpent ? "input-error" : ""
            } bg-base-100 text-base-content`}
            style={{ appearance: "none", MozAppearance: "textfield" }}
          />
          {errors.timeSpent && (
            <span className="text-error-content text-sm mt-1">
              {errors.timeSpent}
            </span>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Frequency per month</span>
          </label>
          <input
            type="number"
            placeholder="Enter frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className={`input input-bordered tabular-nums w-full ${
              errors.frequency ? "input-error" : ""
            } bg-base-100 text-base-content`}
            style={{ appearance: "none", MozAppearance: "textfield" }}
          />
          {errors.frequency && (
            <span className="text-error-content text-sm mt-1">
              {errors.frequency}
            </span>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Hourly cost ($)</span>
          </label>
          <input
            type="number"
            placeholder="Enter cost"
            value={hourlyCost}
            onChange={(e) => setHourlyCost(e.target.value)}
            className={`input input-bordered tabular-nums w-full ${
              errors.hourlyCost ? "input-error" : ""
            } bg-base-100 text-base-content`}
            style={{ appearance: "none", MozAppearance: "textfield" }}
          />
          {errors.hourlyCost && (
            <span className="text-error-content text-sm mt-1">
              {errors.hourlyCost}
            </span>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Monthly delegation cost ($)</span>
          </label>
          <input
            type="number"
            placeholder="Enter delegation cost"
            value={delegateCost}
            onChange={(e) => setDelegateCost(e.target.value)}
            className={`input input-bordered tabular-nums w-full ${
              errors.delegateCost ? "input-error" : ""
            } bg-base-100 text-base-content`}
            style={{ appearance: "none", MozAppearance: "textfield" }}
          />
          {errors.delegateCost && (
            <span className="text-error-content text-sm mt-1">
              {errors.delegateCost}
            </span>
          )}
        </div>

        {totalCost !== null && (
          <div className="mt-4 text-center p-6 border-2 border-primary rounded-md shadow-md bg-base-200">
            <h2 className="font-semibold text-base-content text-sm">
              Your Monthly Cost:
            </h2>
            <p className="text-3xl font-bold text-primary tabular-nums">
              ${totalCost.toFixed(2)}
            </p>
            <h2 className="text-sm font-semibold text-base-content mt-4">
              Your Yearly Cost:
            </h2>
            <p className="text-3xl font-bold text-primary tabular-nums">
              ${(totalCost * 12).toFixed(2)}
            </p>

            <div className="divider"></div>

            <h2 className="font-semibold text-base-content text-sm">
              Delegation Monthly Cost:
            </h2>
            <p className="text-3xl font-bold text-primary tabular-nums">
              ${Number(delegateCost).toFixed(2)}
            </p>

            <div className="mt-6 p-4 rounded-lg bg-secondary text-secondary-content">
              <h3 className="font-bold text-lg mb-2">
                {totalCost < Number(delegateCost) ? (
                  <span>Worthy to do it yourself!</span>
                ) : (
                  <span>Better to delegate!</span>
                )}
              </h3>
              <p className="text-sm">
                {totalCost < Number(delegateCost) ? (
                  <span>
                    You save{" "}
                    <span className="font-bold ">
                      ${(Number(delegateCost) - totalCost).toFixed(2)}
                    </span>{" "}
                    monthly by doing it yourself
                  </span>
                ) : (
                  <span>
                    You save{" "}
                    <span className="font-bold">
                      ${(totalCost - Number(delegateCost)).toFixed(2)}
                    </span>{" "}
                    monthly by delegating
                  </span>
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CostCalculator;
