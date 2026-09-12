# TDK User Management Landscape Tiltfile
# Enterprise User Directory, SSO, RBAC & Audit Governance

# Load TDK extension
v1alpha1.extension_repo(name='tdk-cli', url='https://github.com/tdk-landscape/tdk-cli')
v1alpha1.extension(name='tdk-cli', repo_name='tdk-cli', repo_path='')

# Load TDK utilities
load('ext://tdk-cli', 'Utils', 'Manifest', 'Config')

print("🚀 TDK User Management Landscape")
print("   Project → Stacks: admin, portal, compliance")
print("   Resources: 6 Enterprise Identity & Governance Services")
print("")

# Default to all services if no args
config.define_string_list("to-run", args=True)
cfg = config.parse()

# Let TDK handle service discovery and registration from service.json manifests
