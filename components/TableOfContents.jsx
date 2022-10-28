import React, {useState, useEffect, useRef} from 'react'
import { StyledTableOfContents } from '../styles/TableOfContents.styled'

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState([]);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("h2, h3")
    );

    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);


  return { nestedHeadings };
};

const getNestedHeadings = (headingElements) => {
  const nestedHeadings = [];

  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === "H2") {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
      });
    }
  });

  return nestedHeadings;
};

const toggleHeadingActive = () => {
  const allHeadings = document.querySelectorAll('h2, h3, h4, h5, h6')
  console.log(allHeadings);
  allHeadings.forEach(element => {
    element.classList.remove('active')
  });
}

const Headings = ({ headings, activeId  }) => (
  <ul>
    {headings.map((heading) => (
      <li key={heading.id} className={heading.id === activeId ? "active" : ""}>
        <a 
          href={`${heading.id}`}
          onClick={(e) => {
            e.preventDefault();
            const headID = document.querySelector(`#${heading.id}`)
            headID.scrollIntoView({behavior: "smooth"});
            toggleHeadingActive()
            headID.classList.toggle('active');
          }}
        >
          {heading.title}
        </a>
        {heading.items.length > 0 && (
          <ul>
            {heading.items.map((child) => (
              <li key={child.id} className={child.id === activeId ? "active" : ""}>
                <a 
                  href={`${child.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const headID = document.querySelector(`#${child.id}`)
                    headID.scrollIntoView({behavior: "smooth"});
                    toggleHeadingActive()
                    headID.classList.toggle('active');
                  }}
                >
                  {child.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

const useIntersectionObserver = (setActiveId) => {
  const headingElementsRef = useRef({});

  useEffect(() => {

    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);
    

      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id) => headingElements.findIndex((heading) => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-110px 0px -40% 0px',
    });

    const headingElements = Array.from(document.querySelectorAll("h2, h3"));
    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();

  }, []);
};

export const TableOfContents = () => {

  const [activeId, setActiveId] = useState();
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);
  
  return (
    <StyledTableOfContents>
      <hr />
        <h5>Table of Contents</h5>
        <nav aria-label="Table of contents">
          <Headings headings={nestedHeadings} activeId={activeId}/>
        </nav>
      <hr />

      <div className="tags-cont">
        <h5>tags</h5>
        <a href="#" className='tag'>#tagOne</a>
      </div>
    </StyledTableOfContents>
  )

}
