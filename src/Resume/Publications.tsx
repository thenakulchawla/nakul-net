
export const Publications = () => {
    return (

        <section className="section projects-section">
            <h2 className="section-title"><i className="fa fa-archive"></i>Publications</h2>

            <div className="item">
                <div className='per-project-title dotted-line'>
                    <span className="padding-right-2px" ><strong>Block Propagation Applied to Nakamoto Network</strong></span>
                    <span className="padding-left-5px-right"><a href="https://blockchain.asu.edu/block-propagation-applied-to-nakamoto-networks/">Link</a></span>
                </div>
                <div className="project-tagline">
                    <ul>
                        <li> Compares the performance of Compact blocks and xThin blocks in the Dash network</li>
                    </ul>
                </div>
            </div>

            <div className="item">
                <div className='per-project-title dotted-line'>
                    <span className="padding-right-2px" ><strong>Velocity</strong></span>
                    <span className="padding-left-5px-right"><a href="http://www.public.asu.edu/~hwbehren/papers/icbc-2019-velocity.pdf">Link</a></span>
                </div>
                <div className="project-tagline">
                    <ul>
                        <li> Scalability Improvements in Block Propagation Through Rateless Erasure Coding</li>
                        <li> Introduces a new protocol to relay block data by aggregating partial information from multiple peers.</li>
                        <li> Introduces potential to relay block information over UDP networks.</li>
                    </ul>
                </div>
            </div>

            <div className="item">
                <div className='per-project-title dotted-line'>
                    <span className="padding-right-2px" ><strong>Digital Fountain for Multi-Node Aggregation of Data in Blockchains</strong></span>
                    <span className="padding-left-5px-right"><a href="https://search.proquest.com/openview/45c60bcf85c2a2bd22c1162a8bda3a63/1?pq-origsite=gscholar&cbl=18750&diss=y">Link</a></span>
                </div>
                <div className="project-tagline">
                    <ul>
                        <li> Introduces a technique to relay block data by aggregating partial information from multiple peers.</li>
                        <li> Introduces potential to relay block information over UDP networks.</li>
                    </ul>
                </div>
            </div>


        </section>
    )
}
