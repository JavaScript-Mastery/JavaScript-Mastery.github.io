---
title: Our Features Showcase
description: Showcase of all the components and features available in the theme
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Avatar from "@site/src/ui/Avatar";
import Breadcrumb from "@site/src/ui/Breadcrumb";
import Button from "@site/src/ui/Button";
import Card from "@site/src/ui/Card";
import Chart from "@site/src/ui/Chart";
import Separator from "@site/src/ui/Separator";
import MySheet from "@site/src/components/MySheet";
import Skeleton from "@site/src/ui/Skeleton";
import BrowserWindow from "@site/src/components/BrowserWindow";

# Our Features Showcase

This page showcases all the components and features available in the theme.

## Avatar Component

```tsx
<Avatar
  src="https://github.com/ajay-dhangar.png"
  alt="User Name"
  size="large"
/>
```

 <BrowserWindow minHeight={300}>
  <Avatar
   src="https://github.com/ajay-dhangar.png"
   alt="User Name"
   size="large"
  />
 </BrowserWindow>

---

## Breadcrumb Component

```tsx
<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Category", href: "#" },
    { label: "Product" },
  ]}
/>
```

<BrowserWindow minHeight={300}>
<Breadcrumb
items={[
{ label: "Home", href: "/" },
{ label: "Category", href: "#" },
{ label: "Product" },
]}
/>
</BrowserWindow>

---

## Button Component

<Tabs>

<TabItem value="btn1" label="Primary Button">
```tsx
<Button
  label="Primary Button"
  onClick={() => alert("Primary clicked")}
  variant="primary"
  size="medium"
/>
```
 <BrowserWindow minHeight={300}>
<Button
label="Primary Button"
onClick={() => alert("Primary clicked")}
variant="primary"
size="medium"
/>
</BrowserWindow>

</TabItem>

<TabItem value="btn2" label="Secondary Button">
```tsx
<Button
  label="Primary Button"
  onClick={() => alert("Primary clicked")}
  variant="primary"
  size="medium"
/>
```

 <BrowserWindow minHeight={300}>

<Button
label="Secondary Button"
onClick={() => alert("Secondary clicked")}
variant="secondary"
size="large"
/>
</BrowserWindow>
</TabItem>

<TabItem value="btn3" label="Outline Button">
```tsx
<Button
  label="Outline Button"
  onClick={() => alert("Outline clicked")}
  variant="outline"
  size="small"
  disabled
/>
```

<BrowserWindow minHeight={300}>
  <Button
    label="Outline Button"
    onClick={() => alert("Outline clicked")}
    variant="outline"
    size="small"
    disabled
  />
 </BrowserWindow>
</TabItem>

</Tabs>

---

## Card Component

```tsx
<Card
  title="Advanced Card Title"
  content="This is an example of dynamic card content. It will expand when the button is clicked to show more details, offering a modern UI/UX experience."
  footer="Footer content can go here."
  expandable
/>
```

<BrowserWindow minHeight={300}>
<Card
title="Advanced Card Title"
content="This is an example of dynamic card content. It will expand when the button is clicked to show more details, offering a modern UI/UX experience."
footer="Footer content can go here."
expandable
/>
</BrowserWindow>

---

## Chart Component

```tsx
<Chart
  data={{
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [30, 45, 60, 40, 80, 70],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
      },
    ],
  }}
/>
```

<BrowserWindow minHeight={300}>
<Chart
data={{
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [30, 45, 60, 40, 80, 70],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
      },
    ],
  }}
/>
</BrowserWindow>

<br />

## Separator Component

```tsx
<Separator />
```

<BrowserWindow minHeight={300}>  
 <Separator />  
</BrowserWindow>

---

## Sheet Component

```tsx
<MySheet
  title="Pick a Topic"
  description="Select a topic from the list below to learn more about it."
  list={[
    { label: "Introduction to JavaScript", link: "#" },
    { label: "All About Variables", link: "#" },
    { label: "Data Types", link: "#" },
    { label: "Type Casting", link: "#" },
    { label: "Equality Comparisons", link: "#" },
    { label: "Loops and Iterations", link: "#" },
    { label: "Control Flow", link: "#" },
    { label: "Expressions and Operators", link: "#" },
    { label: "Functions", link: "#" },
    { label: "DOM APIs", link: "#" },
    { label: "Strict Mode", link: "#" },
    { label: "This Keyword", link: "#" },
    { label: "Asynchronous JavaScript", link: "#" },
    { label: "Working with APIs", link: "#" },
    { label: "Classes", link: "#" },
    { label: "Javascript Iterators and Generators", link: "#" },
    { label: "Modules in Javascript", link: "#" },
    { label: "Memory Management", link: "#" },
    { label: "JavaScript Chrome Dev Tools", link: "#" },
    { label: "FrontEnd", link: "#" },
    { label: "React", link: "#" },
    { label: "TypeScript", link: "#" },
    { label: "Node.js", link: "#" },
  ]}
/>
```

<BrowserWindow minHeight={300}>
<MySheet
title="Pick a Topic"
description="Select a topic from the list below to learn more about it."
list={[
{ label: "Introduction to JavaScript", link: "#" },
{ label: "All About Variables", link: "#" },
{ label: "Data Types", link: "#" },
{ label: "Type Casting", link: "#" },
{ label: "Equality Comparisons", link: "#" },
{ label: "Loops and Iterations", link: "#" },
{ label: "Control Flow", link: "#" },
{ label: "Expressions and Operators", link: "#" },
{ label: "Functions", link: "#" },
{ label: "DOM APIs", link: "#" },
{ label: "Strict Mode", link: "#" },
{ label: "This Keyword", link: "#" },
{ label: "Asynchronous JavaScript", link: "#" },
{ label: "Working with APIs", link: "#" },
{ label: "Classes", link: "#" },
{ label: "Javascript Iterators and Generators", link: "#" },
{ label: "Modules in Javascript", link: "#" },
{ label: "Memory Management", link: "#" },
{ label: "JavaScript Chrome Dev Tools", link: "#" },
{ label: "FrontEnd", link: "#" },
{ label: "React", link: "#" },
{ label: "TypeScript", link: "#" },
{ label: "Node.js", link: "#" }

]}
/>
</BrowserWindow>

---

## Skeleton Loader

<Tabs>
<TabItem value="rect" label="Rectangle Skeleton">
```tsx
<Skeleton width="w-64" height="h-6" />
```
<BrowserWindow minHeight={300}>
<Skeleton width="w-64" height="h-6" />  
</BrowserWindow>
</TabItem>

<TabItem value="circle" label="Circle Skeleton">
```tsx
<Skeleton width="w-16" height="h-16" circle />
```

<BrowserWindow minHeight={300}>
<Skeleton width="w-16" height="h-16" circle /> 
</BrowserWindow>
</TabItem>

<TabItem value="multiple" label="Multiple Skeletons">
```tsx
<Skeleton count={5} height="h-4" className="my-2" />
```

<BrowserWindow minHeight={300}>
<Skeleton count={5} height="h-4" className="my-2" />
</BrowserWindow>
</TabItem>

</Tabs>