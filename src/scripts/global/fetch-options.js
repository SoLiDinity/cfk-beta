const OPTIONS = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "api-key": "l8XUcaftkQlJp4m4AWgLl7kAHbe26UbEO34HQLTjfd5IpEAGoGofsvPFxg4BT6D7"
    },
    body: JSON.stringify({
        "dataSource": "Cluster0",
        "database": "clicksforkicks",
        "collection": "users"
    })
};

export default OPTIONS;