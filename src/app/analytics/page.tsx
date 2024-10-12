"use client";


const Analytics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-7 pb-4 custom-grid-rows">
      <div className="col-span-2 bg-red-50 md:row-span-1 xl:row-span-6" />
      <div className="row-span-3 bg-red-50 xl:row-span-6"/>
      <div className="col-span-3 bg-red-50 md:row-span-1 xl:row-span-6" />
    </div>
  );
};

export default Analytics;
