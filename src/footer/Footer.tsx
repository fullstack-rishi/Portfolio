
export default function Footer() {
  const d:Date = new Date();
  return (
    <div className="flex item-center justify-center text-white">
      © 2025-{d.getFullYear()} Copyright Rushikesh Barve
    </div>
  )
}
