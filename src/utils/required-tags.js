export default [
    'platform_id',
    'Name',
    'Description',
    'location',
    'stack',
    'business_owner',
    'business_unit',
    'it_owner',
    'project',
    'cost_center',
    'platform_role',
    'compliance',
    'deployed_by',
    'itsm_id',
    'os_type',
    'os_version',
    'creation_date',
    'backup_policy',
    'internet_facing'
]

export const required_tags2 = {
    "instance": ["Name", "Description", "platform_id", "location", "stack", "business_owner", "business_unit", "it_owner", "project", "cost_center", "platform_role", "compliance", "deployed_by", "lights_out", "itsm_id", "os_type", "os_version", "creation_date", "expiration_date", "backup_policy", "internet_facing"],
    "volume": ["platform_id", "location", "stack", "business_owner", "business_unit", "it_owner", "project", "cost_center", "platform_role", "compliance", "deployed_by", "itsm_id", "os_type", "os_version", "creation_date", "expiration_date"],
    "snapshot": ["platform_id", "location", "stack", "business_owner", "business_unit", "it_owner", "project", "cost_center", "platform_role", "compliance", "deployed_by", "itsm_id", "os_type", "os_version", "creation_date", "expiration_date"],
    "ami": ["platform_id", "location", "stack", "business_owner", "business_unit", "it_owner", "project", "cost_center", "platform_role", "compliance", "deployed_by", "itsm_id", "os_type", "os_version", "creation_date", "expiration_date"],
    "vpc": ["platform_id", "location", "stack", "business_owner", "business_unit", "it_owner", "project", "cost_center", "platform_role", "compliance", "deployed_by", "itsm_id", "creation_date", "expiration_date"],
    "rds": ["Name", "Description", "platform_id", "location", "stack", "business_owner", "business_unit", "it_owner", "project", "cost_center", "platform_role", "compliance", "deployed_by", "lights_out", "itsm_id", "creation_date", "expiration_date"],
    "s3": ["platform_id", "location", "stack", "business_owner", "business_unit", "it_owner", "project", "cost_center", "platform_role", "compliance", "deployed_by", "itsm_id", "creation_date", "expiration_date", "backup_policy"],
    "sqs": ["platform_id", "location", "stack", "business_owner", "business_unit", "it_owner", "project", "cost_center", "platform_role", "compliance", "deployed_by", "itsm_id", "creation_date", "expiration_date"],
    "sns": ["platform_id", "location", "stack", "business_owner", "business_unit", "it_owner", "project", "cost_center", "platform_role", "compliance", "deployed_by", "itsm_id", "creation_date", "expiration_date"],
    "dynamodb": ["platform_id", "location", "stack", "business_owner", "business_unit", "it_owner", "project", "cost_center", "platform_role", "compliance", "deployed_by", "itsm_id", "creation_date", "expiration_date"],
    "kinesis": ["platform_id", "location", "stack", "business_owner", "business_unit", "it_owner", "project", "cost_center", "platform_role", "compliance", "deployed_by", "itsm_id", "creation_date", "expiration_date"],
    "lambda": ["platform_id", "location", "stack", "business_owner", "business_unit", "it_owner", "project", "cost_center", "platform_role", "compliance", "deployed_by", "itsm_id", "creation_date", "expiration_date"],
    "cloudfront": ["platform_id", "location", "stack", "business_owner", "business_unit", "it_owner", "project", "cost_center", "platform_role", "compliance", "deployed_by", "itsm_id", "creation_date", "expiration_date"],
    "ecs": ["platform_id", "location", "stack", "business_owner", "business_unit", "it_owner", "project", "cost_center", "platform_role", "compliance", "deployed_by", "itsm_id", "creation_date", "expiration_date"],
    "fsx": ["Name", "Description", "platform_id", "location", "stack", "business_owner", "business_unit", "it_owner", "project", "cost_center", "platform_role", "compliance", "deployed_by", "itsm_id", "creation_date", "expiration_date", "backup_policy"],
    "efs": ["Name", "Description", "platform_id", "location", "stack", "business_owner", "business_unit", "it_owner", "project", "cost_center", "platform_role", "compliance", "deployed_by", "itsm_id", "creation_date", "expiration_date", "backup_policy"],
    "elb": ["platform_id", "location", "stack", "business_owner", "business_unit", "it_owner", "project", "cost_center", "platform_role", "compliance", "deployed_by", "itsm_id", "creation_date", "expiration_date", "internet_facing"],
    "eks": ["platform_id", "location", "stack", "business_owner", "business_unit", "it_owner", "project", "cost_center", "platform_role", "compliance", "deployed_by", "itsm_id", "creation_date", "expiration_date"],
    "routetable": ["platform_id", "location", "stack", "business_owner", "business_unit", "it_owner", "project", "cost_center", "platform_role", "compliance", "deployed_by", "itsm_id", "creation_date", "expiration_date", "internet_facing"],
    "subnet": ["platform_id", "location", "stack", "business_owner", "business_unit", "it_owner", "project", "cost_center", "platform_role", "compliance", "deployed_by", "itsm_id", "creation_date", "expiration_date"]
}

//missing
//"backup_policy" for EBS
//"storage gateway" for Storage Gateway
//"internet_facing" for Load Balancers (added to elb)
//"internet_facing" for "Security Groups"
//"internet_facing" for API Gateway
//"internet_facing" for Transfer Family