"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[3312],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2,sidebar_label:"EMR on EKS with Karpenter"},i="EMR on EKS with [Karpenter](https://karpenter.sh/)",s={unversionedId:"amazon-emr-on-eks/emr-eks-karpenter",id:"amazon-emr-on-eks/emr-eks-karpenter",title:"EMR on EKS with [Karpenter](https://karpenter.sh/)",description:"Introduction",source:"@site/docs/amazon-emr-on-eks/emr-eks-karpenter.md",sourceDirName:"amazon-emr-on-eks",slug:"/amazon-emr-on-eks/emr-eks-karpenter",permalink:"/data-on-eks/docs/amazon-emr-on-eks/emr-eks-karpenter",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/amazon-emr-on-eks/emr-eks-karpenter.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"EMR on EKS with Karpenter"},sidebar:"docs",previous:{title:"Introduction",permalink:"/data-on-eks/docs/amazon-emr-on-eks/"},next:{title:"EMR on EKS with Apache Yunikorn",permalink:"/data-on-eks/docs/amazon-emr-on-eks/emr-eks-yunikorn"}},p={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Deploying the Solution",id:"deploying-the-solution",level:2},{value:"Prerequisites:",id:"prerequisites",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Verify the resources",id:"verify-the-resources",level:3},{value:"Execute Sample Spark job",id:"execute-sample-spark-job",level:2},{value:"Execute the sample PySpark Job to trigger compute optimized Karpenter provisioner",id:"execute-the-sample-pyspark-job-to-trigger-compute-optimized-karpenter-provisioner",level:3},{value:"Verify the job execution",id:"verify-the-job-execution",level:4},{value:"Execute the sample PySpark Job to trigger Memory optimized Karpenter provisioner",id:"execute-the-sample-pyspark-job-to-trigger-memory-optimized-karpenter-provisioner",level:3},{value:"Verify the job execution",id:"verify-the-job-execution-1",level:4},{value:"Cleanup",id:"cleanup",level:2}],m={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"emr-on-eks-with-karpenter"},"EMR on EKS with ",(0,r.kt)("a",{parentName:"h1",href:"https://karpenter.sh/"},"Karpenter")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/awslabs/data-on-eks/tree/main/analytics/terraform/emr-eks-karpenter"},"pattern"),", you will learn how to deploy, configure and use multiple ",(0,r.kt)("a",{parentName:"p",href:"https://karpenter.sh/"},"Karpenter")," provisioners for scaling Spark jobs with EMR on EKS."),(0,r.kt)("p",null,"Multiple Data teams within the organization can run Spark jobs on the selected Karpenter provisioners using ",(0,r.kt)("inlineCode",{parentName:"p"},"tolerations")," specified in the pod templates example."),(0,r.kt)("p",null,"This pattern deploys three Karpenter provisioners."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spark-compute-optimized")," provisioner to run spark jobs on ",(0,r.kt)("inlineCode",{parentName:"li"},"c5d")," instances."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spark-memory-optimized")," provisioner to run spark jobs on ",(0,r.kt)("inlineCode",{parentName:"li"},"r5d")," instances."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spark-graviton-memory-optimized")," provisioner to run spark jobs on ",(0,r.kt)("inlineCode",{parentName:"li"},"r6gd")," Graviton instances(",(0,r.kt)("inlineCode",{parentName:"li"},"ARM64"),").")),(0,r.kt)("p",null,"Let's review the Karpenter provisioner for computed optimized instances deployed by this pattern."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Karpenter provisioner for compute optimized instances. This template leverages the pre-created AWS Launch templates.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: karpenter.sh/v1alpha5\nkind: Provisioner\nmetadata:\n  name: spark-compute-optimized\n  namespace: karpenter # Same namespace as Karpenter add-on installed\nspec:\n  kubeletConfiguration:\n    containerRuntime: containerd\n    #    podsPerCore: 2\n    #    maxPods: 20\n  requirements:\n    - key: "topology.kubernetes.io/zone"\n      operator: In\n      values: [${azs}a] #Update the correct region and zones\n    - key: "karpenter.sh/capacity-type"\n      operator: In\n      values: ["spot", "on-demand"]\n    - key: "node.kubernetes.io/instance-type" #If not included, all instance types are considered\n      operator: In\n      values: ["c5d.large","c5d.xlarge","c5d.2xlarge","c5d.4xlarge","c5d.9xlarge"] # 1 NVMe disk\n    - key: "kubernetes.io/arch"\n      operator: In\n      values: ["amd64"]\n  limits:\n    resources:\n      cpu: 1000\n  providerRef:\n    name: spark-compute-optimized\n  labels:\n    type: karpenter\n    provisioner: spark-compute-optimized\n    NodeGroupType: SparkComputeOptimized\n  taints:\n    - key: spark-compute-optimized\n      value: \'true\'\n      effect: NoSchedule\n  ttlSecondsAfterEmpty: 120 # optional, but never scales down if not set\n\n---\napiVersion: karpenter.k8s.aws/v1alpha1\nkind: AWSNodeTemplate\nmetadata:\n  name: spark-compute-optimized\n  namespace: karpenter\nspec:\n  subnetSelector:\n    Name: "${eks_cluster_id}-private*"       # required\n  launchTemplate: "${launch_template_name}"  # optional, see Launch Template documentation\n  tags:\n    InstanceType: "spark-compute-optimized"  # optional, add tags for your own use\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Spark Jobs can use this provisioner to submit the jobs by adding ",(0,r.kt)("inlineCode",{parentName:"strong"},"tolerations")," to pod templates.")),(0,r.kt)("p",null,"e.g.,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  tolerations:\n    - key: "spark-compute-optimized"\n      operator: "Exists"\n      effect: "NoSchedule"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Karpenter provisioner for memory optimized instances. This template uses the AWS Node template with Userdata.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: karpenter.sh/v1alpha5\nkind: Provisioner\nmetadata:\n  name: spark-memory-optimized\n  namespace: karpenter\nspec:\n  kubeletConfiguration:\n    containerRuntime: containerd\n#    podsPerCore: 2\n#    maxPods: 20\n  requirements:\n    - key: "topology.kubernetes.io/zone"\n      operator: In\n      values: [${azs}b] #Update the correct region and zone\n    - key: "karpenter.sh/capacity-type"\n      operator: In\n      values: ["spot", "on-demand"]\n    - key: "node.kubernetes.io/instance-type" #If not included, all instance types are considered\n      operator: In\n      values: ["r5d.4xlarge","r5d.8xlarge","r5d.8xlarge"] # 2 NVMe disk\n    - key: "kubernetes.io/arch"\n      operator: In\n      values: ["amd64"]\n  limits:\n    resources:\n      cpu: 1000\n  providerRef: # optional, recommended to use instead of `provider`\n    name: spark-memory-optimized\n  labels:\n    type: karpenter\n    provisioner: spark-memory-optimized\n    NodeGroupType: SparkMemoryOptimized\n  taints:\n    - key: spark-memory-optimized\n      value: \'true\'\n      effect: NoSchedule\n  ttlSecondsAfterEmpty: 120 # optional, but never scales down if not set\n\n---\napiVersion: karpenter.k8s.aws/v1alpha1\nkind: AWSNodeTemplate\nmetadata:\n  name: spark-memory-optimized\n  namespace: karpenter\nspec:\n  blockDeviceMappings:\n    - deviceName: /dev/xvda\n      ebs:\n        volumeSize: 200Gi\n        volumeType: gp3\n        encrypted: true\n        deleteOnTermination: true\n  metadataOptions:\n    httpEndpoint: enabled\n    httpProtocolIPv6: disabled\n    httpPutResponseHopLimit: 2\n    httpTokens: required\n  subnetSelector:\n    Name: "${eks_cluster_id}-private*"        # Name of the Subnets to spin up the nodes\n  securityGroupSelector:                      # required, when not using launchTemplate\n    Name: "${eks_cluster_id}-node*"           # name of the SecurityGroup to be used with Nodes\n  instanceProfile: "${instance_profile}"      # optional, if already set in controller args\n  userData: |\n    MIME-Version: 1.0\n    Content-Type: multipart/mixed; boundary="BOUNDARY"\n\n    --BOUNDARY\n    Content-Type: text/x-shellscript; charset="us-ascii"\n\n    #!/bin/bash\n    echo "Running a custom user data script"\n    set -ex\n\n    IDX=1\n    DEVICES=$(lsblk -o NAME,TYPE -dsn | awk \'/disk/ {print $1}\')\n\n    for DEV in $DEVICES\n    do\n      mkfs.xfs /dev/$${DEV}\n      mkdir -p /local$${IDX}\n      echo /dev/$${DEV} /local$${IDX} xfs defaults,noatime 1 2 >> /etc/fstab\n      IDX=$(($${IDX} + 1))\n    done\n\n    mount -a\n\n    /usr/bin/chown -hR +999:+1000 /local*\n\n    --BOUNDARY--\n\n  tags:\n    InstanceType: "spark-memory-optimized"    # optional, add tags for your own use\n\n')),(0,r.kt)("p",null,"Spark Jobs can use this provisioner to submit the jobs by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"tolerations")," to pod templates."),(0,r.kt)("p",null,"e.g.,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  tolerations:\n    - key: "spark-memory-optimized"\n      operator: "Exists"\n      effect: "NoSchedule"\n')),(0,r.kt)("h2",{id:"deploying-the-solution"},"Deploying the Solution"),(0,r.kt)("p",null,"In this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/awslabs/data-on-eks/tree/main/analytics/terraform/emr-eks-karpenter"},"example"),", you will provision the following resources required to run Spark Jobs using EMR on EKS with ",(0,r.kt)("a",{parentName:"p",href:"https://karpenter.sh/"},"Karpenter")," as Autoscaler, as well as monitor job metrics using Amazon Managed Prometheus and Amazon Managed Grafana."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creates EKS Cluster Control plane with public endpoint (for demo purpose only)"),(0,r.kt)("li",{parentName:"ul"},"One managed node group",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Core Node group with 3 AZs for running system critical pods. e.g., Cluster Autoscaler, CoreDNS, Observability, Logging etc."))),(0,r.kt)("li",{parentName:"ul"},"Enables EMR on EKS and creates two Data teams (",(0,r.kt)("inlineCode",{parentName:"li"},"emr-data-team-a"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"emr-data-team-b"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Creates new namespace for each team"),(0,r.kt)("li",{parentName:"ul"},"Creates Kubernetes role and role binding(",(0,r.kt)("inlineCode",{parentName:"li"},"emr-containers")," user) for the above namespace"),(0,r.kt)("li",{parentName:"ul"},"New IAM role for the team execution role"),(0,r.kt)("li",{parentName:"ul"},"Update ",(0,r.kt)("inlineCode",{parentName:"li"},"AWS_AUTH")," config map with ",(0,r.kt)("inlineCode",{parentName:"li"},"emr-containers")," user and ",(0,r.kt)("inlineCode",{parentName:"li"},"AWSServiceRoleForAmazonEMRContainers")," role"),(0,r.kt)("li",{parentName:"ul"},"Create a trust relationship between the job execution role and the identity of the EMR managed service account"))),(0,r.kt)("li",{parentName:"ul"},"EMR Virtual Cluster for ",(0,r.kt)("inlineCode",{parentName:"li"},"emr-data-team-a")," and IAM policy for ",(0,r.kt)("inlineCode",{parentName:"li"},"emr-data-team-a")),(0,r.kt)("li",{parentName:"ul"},"Amazon Managed Prometheus workspace to remotely write metrics from Prometheus server"),(0,r.kt)("li",{parentName:"ul"},"Deploys the following Kubernetes Add-ons",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Managed Add-ons",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"VPC CNI, CoreDNS, KubeProxy, AWS EBS CSi Driver"))),(0,r.kt)("li",{parentName:"ul"},"Self Managed Add-ons",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Karpetner, Metrics server with HA, CoreDNS Cluster proportional Autoscaler, Cluster Autoscaler, Prometheus Server and Node Exporter, VPA for Prometheus, AWS for FluentBit, CloudWatchMetrics for EKS")))))),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites:"),(0,r.kt)("p",null,"Ensure that you have installed the following tools on your machine."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"aws cli")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/tasks/tools/"},"kubectl")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"terraform"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Currently Amazon Managed Prometheus supported only in selected regions. Please see this ",(0,r.kt)("a",{parentName:"em",href:"https://docs.aws.amazon.com/prometheus/latest/userguide/what-is-Amazon-Managed-Service-Prometheus.html"},"userguide")," for supported regions.")),(0,r.kt)("h3",{id:"deploy"},"Deploy"),(0,r.kt)("p",null,"Clone the repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/awslabs/data-on-eks.git\n")),(0,r.kt)("p",null,"Navigate into one of the example directories and run ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform init")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd data-on-eks/analytics/terraform/emr-eks-karpenter\nterraform init\n")),(0,r.kt)("p",null,"Set AWS_REGION and Run Terraform plan to verify the resources created by this execution."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export AWS_REGION="us-west-2"\nterraform plan\n')),(0,r.kt)("p",null,"This command may take between 20 and 30 minutes to create all the resources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"terraform apply\n")),(0,r.kt)("p",null,"Enter ",(0,r.kt)("inlineCode",{parentName:"p"},"yes")," to apply."),(0,r.kt)("h3",{id:"verify-the-resources"},"Verify the resources"),(0,r.kt)("p",null,"Verify the Amazon EKS Cluster and Amazon Managed service for Prometheus"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks describe-cluster --name emr-eks-karpenter\n\naws amp list-workspaces --alias amp-ws-emr-eks-karpenter\n")),(0,r.kt)("p",null,"Verify EMR on EKS Namespaces ",(0,r.kt)("inlineCode",{parentName:"p"},"emr-data-team-a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"emr-data-team-b")," and Pod status for ",(0,r.kt)("inlineCode",{parentName:"p"},"Prometheus"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Vertical Pod Autoscaler"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Metrics Server")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster Autoscaler"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks --region us-west-2 update-kubeconfig --name emr-eks-karpenter # Creates k8s config file to authenticate with EKS Cluster\n\nkubectl get nodes # Output shows the EKS Managed Node group nodes\n\nkubectl get ns | grep emr-data-team # Output shows emr-data-team-a and emr-data-team-b namespaces for data teams\n\nkubectl get pods --namespace=prometheus # Output shows Prometheus server and Node exporter pods\n\nkubectl get pods --namespace=vpa  # Output shows Vertical Pod Autoscaler pods\n\nkubectl get pods --namespace=kube-system | grep  metrics-server # Output shows Metric Server pod\n\nkubectl get pods --namespace=kube-system | grep  cluster-autoscaler # Output shows Cluster Autoscaler pod\n")),(0,r.kt)("h2",{id:"execute-sample-spark-job"},"Execute Sample Spark job"),(0,r.kt)("h3",{id:"execute-the-sample-pyspark-job-to-trigger-compute-optimized-karpenter-provisioner"},"Execute the sample PySpark Job to trigger compute optimized Karpenter provisioner"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The following script requires three input parameters in which ",(0,r.kt)("inlineCode",{parentName:"li"},"EMR_VIRTUAL_CLUSTER_NAME")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"EMR_JOB_EXECUTION_ROLE_ARN")," values can be extracted from ",(0,r.kt)("inlineCode",{parentName:"li"},"terraform apply")," output values."),(0,r.kt)("li",{parentName:"ol"},"For ",(0,r.kt)("inlineCode",{parentName:"li"},"S3_BUCKET"),", Either create a new S3 bucket or use an existing S3 bucket to store the scripts, input and output data required to run this sample job.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"EMR_VIRTUAL_CLUSTER_NAME=$1   # Terraform output variable is emrcontainers_virtual_cluster_name\nS3_BUCKET=$2                  # This script requires S3 bucket as input parameter e.g., s3://<bucket-name>\nEMR_JOB_EXECUTION_ROLE_ARN=$3 # Terraform output variable is emr_on_eks_role_arn\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This shell script downloads the test data to your local machine and uploads to S3 bucket. Verify the shell script before running the job.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd data-on-eks/analytics/terraform/emr-eks-karpenter/examples/spark/\n\n./compute-nytaxi-pyspark-karpenter.sh "<EMR_VIRTUAL_CLUSTER_NAME>" \\\n  "s3://<ENTER-YOUR-BUCKET-NAME>" \\\n  "<EMR_JOB_EXECUTION_ROLE_ARN>"\n')),(0,r.kt)("p",null,"Karpenter may take between 1 and 2 minutes to spin up a new compute node as specified in the provisioner templates before running the Spark Jobs.\nNodes will be drained with once the job is completed"),(0,r.kt)("h4",{id:"verify-the-job-execution"},"Verify the job execution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace=emr-data-team-a -w\n")),(0,r.kt)("h3",{id:"execute-the-sample-pyspark-job-to-trigger-memory-optimized-karpenter-provisioner"},"Execute the sample PySpark Job to trigger Memory optimized Karpenter provisioner"),(0,r.kt)("p",null,"This pattern uses the Karpenter provisioner for memory optimized instances. This template leverages the Karpenter AWS Node template with Userdata."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd data-on-eks/analytics/terraform/emr-eks-karpenter/examples/spark/\n\n./memory-nytaxi-pyspark-karpenter.sh "<EMR_VIRTUAL_CLUSTER_NAME>" \\\n  "s3://<ENTER-YOUR-BUCKET-NAME>" \\\n  "<EMR_JOB_EXECUTION_ROLE_ARN>"\n')),(0,r.kt)("p",null,"Karpetner may take between 1 and 2 minutes to spin up a new compute node as specified in the provisioner templates before running the Spark Jobs.\nNodes will be drained with once the job is completed"),(0,r.kt)("h4",{id:"verify-the-job-execution-1"},"Verify the job execution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace=emr-data-team-a -w\n")),(0,r.kt)("h2",{id:"cleanup"},"Cleanup"),(0,r.kt)("p",null,"To clean up your environment, destroy the Terraform modules in reverse order with ",(0,r.kt)("inlineCode",{parentName:"p"},"--target")," option to avoid destroy failures."),(0,r.kt)("p",null,"Destroy the Kubernetes Add-ons, EKS cluster with Node groups and VPC"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'terraform destroy -target="module.eks_blueprints_kubernetes_addons" -auto-approve\nterraform destroy -target="module.eks_blueprints" -auto-approve\nterraform destroy -target="module.vpc" -auto-approve\n')),(0,r.kt)("p",null,"Finally, destroy any additional resources that are not in the above modules"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"terraform destroy -auto-approve\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To avoid unwanted charges to your AWS account, delete all the AWS resources created during this deployment")))}u.isMDXComponent=!0}}]);