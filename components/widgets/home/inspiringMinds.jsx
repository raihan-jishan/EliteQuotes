import SectionHeader from "@/components/shared/sectionHeader";
import Avatar from "@/components/ui/avatar";

export default function InspiringMinds() {
  const authors = [
    { name: "Bill Gates", imageUrl: "/assets/authors/billgates.jpg" },
    { name: "Steve Jobs", imageUrl: "/assets/authors/stevejobs.jpg" },
    { name: "Elon Musk", imageUrl: "/assets/authors/elonmusk.jpg" },
    { name: "Albert Einstein", imageUrl: "/assets/authors/alberteinstein.jpg" },
    { name: "Mark Zuckerberg", imageUrl: "/assets/authors/markzuckerberg.jpg" },
    { name: "Warren Buffett", imageUrl: "/assets/authors/warrenbaffet.jpg" },
    { name: "Oprah Winfrey", imageUrl: "/assets/authors/oprahwinfrey.jpg" },
    { name: "Nelson Mandela", imageUrl: "/assets/authors/nelsonmandela.jpg" },
    { name: "Mahatma Gandhi", imageUrl: "/assets/authors/mahatmagandhi.jpg" },
    { name: "Apj AbdulKalam", imageUrl: "/assets/authors/apj abdulkalam.jpg" },
  ];

  return (
    <div className="p-2 m-3">
      <div className="mt-10">
        <SectionHeader
          heading={"Inspiring Minds"}
          description={"Daily sparks of creativity and motivation."}
          hideBtn
        />

        {/* Scroll Section */}
        <div className="relative mt-6">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            {authors.map((author, index) => (
              <div key={index} className="shrink-0">
                <Avatar
                  label={author.name}
                  FlexCol
                  imageUrl={author.imageUrl}
                  path={`/quotes?author=${author.name}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
