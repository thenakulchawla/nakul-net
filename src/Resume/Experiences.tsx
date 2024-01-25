
export const Experiences = () => {
    return (
        <section className="section experiences-section">
            <h2 className="section-title"><i className="fa fa-briefcase"></i>Experience</h2>

            <div className="item">
                <div className="meta">
                    <div className="upper-row">
                        <h3 className="job-title">Sr. Software Engineer</h3>
                        <div className="time">11/2021 - present</div>
                    </div>
                    <div className="company">Cruise</div>
                    <ul>
                        <li>Optimized a high-volume data ingest pipeline, reliably processing 5-7TB daily into BigQuery, 
                            enhancing system reliability and resource efficiency, resulting in significant cost reductions. </li>
                        <li>Designed and implemented an in-queue and in-flight compute deduplication framework, 
                            proactively preventing the scheduling of duplicate tasks, 
                            thereby achieving substantial cost savings and significantly enhancing operational efficiency.</li>
                        <li>Scalability and reliability: Developed a GRPC streaming-based load testing framework with k6 to model system behavior under peak loads.</li>
                        <li>Established a pre-deployment testing pipeline for custom silicon clients, enhancing platform reliability.</li>
                        <li>Engineered a vertical scaling solution with a DAG-based intelligent batching system that optimized downloads 
                            and compute utilization, yielding significant time savings and cost reduction.</li>
                    </ul>
                 
                </div>
            </div>

            <div className="item">
                <div className="meta">
                    <div className="upper-row">
                        <h3 className="job-title">Sr. Software Engineer</h3>
                        <div className="time">09/2019 - 11/2021</div>
                    </div>
                    <div className="company">Visa</div>
                    <ul>
                        <li>
                            <div className='emp-project-title'>
                                <span className="padding-right-2px">Payments Fraud Disruption</span>
                            </div>
                            <ul>
                                <li>Aggregating data on live transaction feed of data in in-memory rocks db.</li>
                                <li>Developed angular front end UIs to understand the data and create rules for systems to flag transactions as fraud.</li>
                                <li>Designed and deployed data processors that can handle the aggregation on live transaction feed in real time and queues fraud events.</li>
                                <li>Designed and developed an event generating system that sends emails and other events to other systems for communication.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="item">
                <div className="meta">
                    <div className="upper-row">
                        <h3 className="job-title">Blockchain Engineer</h3>
                        <div className="time">01/2019 - 09/2019</div>
                    </div>
                    <div className="company">IBM Blockchain - Worldwire</div>
                    <ul>
                        <li>
                            <div className='emp-project-title'>
                                <span className="padding-right-2px">Infrastructure</span>
                            </div>
                            <ul>
                                <li>Designed, implemented and deployed a microservice architecture using Kubernetes to enable cross-border payments over Stellar cryptocurrency network.</li>
                                <li>Developed a Go service to automate all Kubernetes deployments eliminating manual deployment. This application was a REST service running on Google App Engine.</li>
                                <li>Collected performance metrics of individual services and the Kubernetes cluster using Prometheus and represented them on Grafana dashboard. Also, Created AWS cloudwatch dashboard for the above mentioned EKS cluster.</li>
                                <li>Minimized Docker container sizes for faster deployments by creating multi-stage container build.</li>
                                <li>Designed the atomic swap process between two blockchains, Bahamian Dollar (CBDC) and Stellar cryptocurrency.</li>
                                <li>Created a caching mechanism for participant registry service so database calls are less and data is pushed to cache only on change.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="item">
                <div className="meta">
                    <div className="upper-row">
                        <h3 className="job-title">Graduate Service Assistant</h3>
                        <div className="time">08/2018 - 12/2018</div>
                    </div>
                    <div className="company">Arizona State University</div>
                    <ul>
                        <li>
                            <div className='emp-project-title'>
                                <span className="padding-right-2px">Thesis <em>Digital Fountain for Multi-node Aggregation of Data in Blockchains</em></span>
                            </div>
                            <ul>
                                <li>Defended thesis, introducing and evaluating a new block propagation that utilizes rateless erasure codes in order to retrieve block data.</li>
                                <li>The study finds that this on dash blockchain the network will maintain consensus and remain profitable for miners block of sizes upto 650MB, and will make xthin/graphene/compact more capable for block propagation by aggregating block data from multiple nodes.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="item">
                <div className="meta">
                    <div className="upper-row">
                        <h3 className="job-title">Software Developer Intern</h3>
                        <div className="time">05/2018 - 08/2018</div>
                    </div>
                    <div className="company">Dash Core Group</div>
                    <ul>
                        <li>
                            <div className='emp-project-title dotted-line'>
                                <span className="padding-right-2px">Graphene <em>Block propagation protocol</em></span>
                                <span className="padding-left-5px-right"><a href='https://github.com/thenakulchawla/dash'>GitHub</a></span>
                            </div>
                            <ul>
                                <li>Optimized block payload by encoding the already broadcasted transactions into a bloom filter and an Inverted bloom lookup table (IBLT), keeping the False positive rate (FPR) adjustable by the sender</li>
                                <li>Developed express validation for blocks and transactions by introducing new modules and critical sections.</li>
                                <li>Handled Denial of Service attacks against unrequested Expedited blocks and high frequency requests from malicious nodes.</li>
                                <li>Acquired deep understanding of decentralized peer to peer adversarial networks and gained good proficiency in C++, RPC tests and unit tests(using boost).</li>
                                <li>Graphene utilizes bloom filters, inverted bloom look up tables and transaction order information to optimize block propagation</li>
                                <li>Using the Bitcoin Unlimited implementation to add bloom filters and inverse bloom look table to the dash implementation.</li>
                                <li>Adding Expedited blocks implementation to dash.</li>
                                <li>Implementing RPC tests on dash core using ctypes and python binding for c++ for integration testing</li>
                                <li>boost c++ tests for writing unit tests</li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="item">
                <div className="meta">
                    <div className="upper-row">
                        <h3 className="job-title">Research Assistant</h3>
                        <div className="time">08/2017 - 05/2018</div>
                    </div>
                    <div className="company">Blockchain Research Lab, Arizona State University</div>
                    <ul>
                        <li>Developed Dash-Simulator using Network Simulator 3 to help scale Dash to the next block propagation technique and block size with profitable orphan rates – dash-simulator</li>
                        <li>Added Compact and xthin block propagation techniques to the dash-simulator.</li>
                        <li>Tested traditional, Compact and xthin for 750 (for better confidence interval) blocks each and published results with orphan rates.</li>
                        <li>Utilized above knowledge about propagation to design a new protocol that utilizes fountain codes to propagate blocks</li>
                    </ul>
                </div>
            </div>

            <div className="item">
                <div className="meta">
                    <div className="upper-row">
                        <h3 className="job-title">Co-founder, Director Research and Development</h3>
                        <div className="time">08/2017 - present</div>
                    </div>
                    <div className="company">Blockchain Innovation Society</div>
                    <ul>
                        <li>The non-profit aims at educating public on blockchains and forming an open platform for blockchain resources.</li>
                        <li>Presentaions, lectures and paper discussions with students at ASU in order to help better understand blockchains</li>
                    </ul>
                </div>
            </div>

            <div className="item">
                <div className="meta">
                    <div className="upper-row">
                        <h3 className="job-title">Developer Business Intelligence</h3>
                        <div className="time">07/2013 - 07/2016</div>
                    </div>
                    <div className="company">Target Corporation India</div>
                    <ul>
                        <li>
                            <div className='emp-project-title'>
                                <span className="padding-right-2px">Real Estate Database</span>
                            </div>
                            <ul>
                                <li>Developed a full stack application using .Net, angularJs (1.3) and SQL server</li>
                                <li>Date warehousing, design and ETL for the complete data from microsoft excel and Teradata to Microsoft SQL Server</li>
                            </ul>
                        </li>

                        <li>
                            <div className='emp-project-title'>
                                <span className="padding-right-2px">Block Group Assignment</span>
                            </div>
                            <ul>
                                <li>ETL, Sqoop data from Teradata to Hive</li>
                                <li>Implementing R-trees to index data for various locations</li>
                                <li>Implemented Ray casting to understand location of users in order to understand the shopping pattern</li>
                                <li>Utilized python, pandas dataframes, pyspark for all implementation and automation was done using shell scripts</li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>





        </section>

    )
}
