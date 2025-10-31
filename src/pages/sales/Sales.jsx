import React, { useEffect, useState } from "react";

export default function Sales() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div>Simulating Sales Page loading...</div>;
  }

  return <h1>Sales Page</h1>;
}
