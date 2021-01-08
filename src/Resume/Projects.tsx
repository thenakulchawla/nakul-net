
export const Projects = () => {
    return (

        <section className="section projects-section">
            <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>

            <div className="item">
                <div className="per-project-title">
                    <span className="padding-right-2px"><strong>In-memory Spatial Database Indexes</strong></span>

                </div>

                <div className="project-tagline">
                    <ul>
                        <li>Developed PR-Quadtrees to index the space for the in-memory database.</li>
                        <li>Placed the pointers of a child quadnode contiguously in a vector collection instead of having one pointer to node like the classic implementation. This made the QuadNode have a smaller memory footprint in the cache and improved data locality.</li>
                        <li>Improving data locality resulted in descendants present in the cache increasing the cache hit-cache miss ratio.</li>
                        <li>For MXCIF Quadtree, the leaf capacity was made configurable, in order to reduce the fan out on insertion of new data.</li>
                        <li>The approach overall boosted the space usage by approx. 40.</li>
                        <li>Technologies: C++.</li>
                    </ul>

                </div>
            </div>

            <div className="item">
                <div className="per-project-title">
                    <span className="padding-right-2px"><strong>KDD Cup 2016</strong></span>

                </div>

                <div className="project-tagline">
                    <ul>
                        <li>Predicted the relevance of an academic institution based on Microsoft Academic Graph data.</li>
                        <li>Generated statistical features by parsing and processing 120 GB of textual data.</li>
                        <li>Used Gradient Boosted Decision Trees, Ranked SVM to make predictions.</li>
                        <li>Technologies: Python, Google Big Query, Bash.</li>
                    </ul>

                </div>
            </div>

            <div className="item">
                <div className="per-project-title dotted">
                    <span className="padding-right-2px"><strong>Lamport Clocks</strong></span>
                    <span className="padding-left-5px-right"><a href="https://github.com/thenakulchawla/lamport-clocks">GitHub</a></span>
                </div>

                <div className="project-tagline">
                    <ul>
                        {/* <li>Predicted the relevance of an academic institution based on Microsoft Academic Graph data.</li>
                        <li>Generated statistical features by parsing and processing 120 GB of textual data.</li>
                        <li>Used Gradient Boosted Decision Trees, Ranked SVM to make predictions.</li>
                        <li>Technologies: Python, Google Big Query, Bash.</li> */}
                    </ul>

                </div>
            </div>



        </section>
    )
}