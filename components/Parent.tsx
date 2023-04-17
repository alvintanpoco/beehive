import React, { useEffect, useRef, useState } from 'react';

function Parent() {
  const parentRef = useRef<HTMLDivElement>(null);
  const [parentDimensions, setParentDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const parentElement = parentRef.current?.parentElement;

    if (parentElement) {
      const { width, height } = parentElement.getBoundingClientRect();
      setParentDimensions({ width, height });
    }
  }, []);

  return (
    <div ref={parentRef}>
      <h1 className="text-radix_indigo-9 dark:text-radix_indigo_dark-7">Hello World</h1>
      <p>Parent width: {parentDimensions.width}px</p>
      <p>Parent height: {parentDimensions.height}px</p>
    </div>
  );
}

export default Parent;