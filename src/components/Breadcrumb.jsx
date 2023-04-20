
const Breadcrumb = ({crumbs}) => {
    
    return <div className="breadcrumb-wrap">
        <div className="container">
            <ul className="breadcrumb">
                {
                    crumbs.map((cr, idx) => <li key={idx} className={`breadcrumb-item ${cr.link ? '': 'active'}`}>
                        {cr.link ? <a href={cr.link}>{cr.name}</a>: cr.name}
                    </li>)
                }
            </ul>
        </div>
    </div>
}

export default Breadcrumb;