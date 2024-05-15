"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[466],{4672:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(5893),t=r(1151);const a={sidebar_position:6,sidebar_label:"EMR on EKS with Fargate"},o="EMR Virtual Cluster on EKS Fargate",l={id:"blueprints/amazon-emr-on-eks/emr-eks-fargate",title:"EMR Virtual Cluster on EKS Fargate",description:"This example shows how to provision a serverless cluster (serverless data plane) using Fargate Profiles to support EMR on EKS virtual clusters.",source:"@site/docs/blueprints/amazon-emr-on-eks/emr-eks-fargate.md",sourceDirName:"blueprints/amazon-emr-on-eks",slug:"/blueprints/amazon-emr-on-eks/emr-eks-fargate",permalink:"/data-on-eks/docs/blueprints/amazon-emr-on-eks/emr-eks-fargate",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/amazon-emr-on-eks/emr-eks-fargate.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"EMR on EKS with Fargate"},sidebar:"blueprints",previous:{title:"EMR on EKS with CDK",permalink:"/data-on-eks/docs/blueprints/amazon-emr-on-eks/emr-eks-cdk"},next:{title:"EMR on EKS Data Platform with AWS CDK",permalink:"/data-on-eks/docs/blueprints/amazon-emr-on-eks/emr-eks-studio"}},i={},c=[{value:"Prerequisites:",id:"prerequisites",level:2},{value:"Deploy",id:"deploy",level:3},{value:"Validate",id:"validate",level:2},{value:"Destroy",id:"destroy",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"emr-virtual-cluster-on-eks-fargate",children:"EMR Virtual Cluster on EKS Fargate"}),"\n",(0,n.jsx)(s.p,{children:"This example shows how to provision a serverless cluster (serverless data plane) using Fargate Profiles to support EMR on EKS virtual clusters."}),"\n",(0,n.jsx)(s.p,{children:"There are two Fargate profiles created:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"kube-system"})," to support core Kubernetes components such as CoreDNS"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"emr-wildcard"})," which supports any namespaces that begin with ",(0,n.jsx)(s.code,{children:"emr-*"}),"; this allows for creating multiple virtual clusters without having to create additional Fargate profiles for each new cluster."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Using the ",(0,n.jsx)(s.code,{children:"emr-on-eks"})," module, you can provision as many EMR virtual clusters as you would like by passing in multiple virtual cluster definitions to ",(0,n.jsx)(s.code,{children:"emr_on_eks_config"}),". Each virtual cluster will get its own set of resources with permissions scoped to only that set of resources. The resources created by the ",(0,n.jsx)(s.code,{children:"emr-on-eks"})," addon include:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Kubernetes namespace, role, and role binding; existing or externally created namespace and role can be utilized as well"}),"\n",(0,n.jsxs)(s.li,{children:["IAM role for service account (IRSA) used by for job execution. Users can scope access to the appropriate S3 bucket and path via ",(0,n.jsx)(s.code,{children:"s3_bucket_arns"}),", use for both accessing job data as well as writing out results. The bare minimum permissions have been provided for the job execution role; users can provide additional permissions by passing in additional policies to attach to the role via ",(0,n.jsx)(s.code,{children:"iam_role_additional_policies"})]}),"\n",(0,n.jsx)(s.li,{children:"CloudWatch log group for task execution logs. Log streams are created by the job itself and not via Terraform"}),"\n",(0,n.jsx)(s.li,{children:"EMR managed security group for the virtual cluster"}),"\n",(0,n.jsx)(s.li,{children:"EMR virtual cluster scoped to the namespace created/provided"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["To learn more about running completely serverless EKS clusters using Fargate, see the ",(0,n.jsx)(s.a,{href:"https://github.com/aws-ia/terraform-aws-eks-blueprints/tree/main/examples/fargate-serverless#serverless-eks-cluster-using-fargate-profiles",children:(0,n.jsx)(s.code,{children:"fargate-serverless"})})," example."]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"Please be informed that the method of creating EMR on EKS clusters has changed and is now done as a Kubernetes add-on.\nThis differs from previous blueprints which deployed EMR on EKS as part of the EKS Cluster module.\nOur team is working towards simplifying both deployment approaches and will soon create a standalone Terraform module for this purpose.\nAdditionally, all blueprints will be updated with this new dedicated EMR on EKS Terraform module."})}),"\n",(0,n.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites:"}),"\n",(0,n.jsx)(s.p,{children:"Ensure that you have the following tools installed locally:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:"aws cli"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://Kubernetes.io/docs/tasks/tools/",children:"kubectl"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"terraform"})}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"deploy",children:"Deploy"}),"\n",(0,n.jsx)(s.p,{children:"Clone the repository"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"git clone https://github.com/awslabs/data-on-eks.git\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Navigate into one of the example directories and run ",(0,n.jsx)(s.code,{children:"terraform init"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cd data-on-eks/analytics/emr-eks-fargate\nterraform init\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Set ",(0,n.jsx)(s.code,{children:"AWS_REGION"})," and Run",(0,n.jsx)(s.code,{children:"terraform plan"})," to verify the resources created by this execution."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'export AWS_REGION="us-west-2" # Change according to your need\nterraform plan\n'})}),"\n",(0,n.jsx)(s.p,{children:"Deploy the pattern"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"terraform apply\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Enter ",(0,n.jsx)(s.code,{children:"yes"})," at command prompt to apply"]}),"\n",(0,n.jsx)(s.h2,{id:"validate",children:"Validate"}),"\n",(0,n.jsxs)(s.p,{children:["The following command will update the ",(0,n.jsx)(s.code,{children:"kubeconfig"})," on your local machine and allow you to interact with your EKS Cluster using ",(0,n.jsx)(s.code,{children:"kubectl"}),"."]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Run ",(0,n.jsx)(s.code,{children:"update-kubeconfig"})," command:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"aws eks --region <REGION> update-kubeconfig --name <CLUSTER_NAME>\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"2",children:["\n",(0,n.jsxs)(s.li,{children:["Test by listing all the pods running currently. Note: the EMR on EKS virtual cluster(s) will create pods as needed to execute jobs and the pods shown will vary depending on how long after deploying the example you run the ",(0,n.jsx)(s.code,{children:"kubectl get pods -A"})," command:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"kubectl get pods -A\n\n# Output should look like below\nNAMESPACE      NAME                                                       READY   STATUS              RESTARTS   AGE\nkube-system    cluster-proportional-autoscaler-coredns-6ccfb4d9b5-sjb8m   1/1     Running             0          8m27s\nkube-system    coredns-7c8d74d658-9cmn2                                   1/1     Running             0          8m27s\nkube-system    coredns-7c8d74d658-pmf5l                                   1/1     Running             0          7m38s\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsx)(s.li,{children:"Execute the sample EMR on EKS job. This will calculate the value of Pi using sample PySpark job."}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"cd analytics/terraform/emr-eks-fargate/examples\n./basic-pyspark-job '<ENTER_EMR_EMR_VIRTUAL_CLUSTER_ID>' '<EMR_JOB_EXECUTION_ROLE_ARN>'\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"4",children:["\n",(0,n.jsxs)(s.li,{children:["Once the job is complete, navigate to the CloudWatch log console and find the log group created by this example ",(0,n.jsx)(s.code,{children:"/emr-on-eks-logs/emr-workload/emr-workload"}),". Click ",(0,n.jsx)(s.code,{children:"Search Log Group"})," and enter ",(0,n.jsx)(s.code,{children:"roughly"})," into the search field. You should see a log entry that has the returned results from the job."]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n    "message": "Pi is roughly 3.146360",\n    "time": "2022-11-20T16:46:59+00:00"\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"destroy",children:"Destroy"}),"\n",(0,n.jsx)(s.p,{children:"To teardown and remove the resources created in this example:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:'kubectl delete all --all -n emr-workload -n emr-custom # ensure all jobs resources are cleaned up first\nterraform destroy -target="module.eks_blueprints_kubernetes_addons" -auto-approve\nterraform destroy -target="module.eks" -auto-approve\nterraform destroy -auto-approve\n'})}),"\n",(0,n.jsx)(s.p,{children:"If the EMR virtual cluster fails to delete and the following error is shown:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"Error: waiting for EMR Containers Virtual Cluster (xwbc22787q6g1wscfawttzzgb) delete: unexpected state 'ARRESTED', wanted target ''. last error: %!s(<nil>)\n"})}),"\n",(0,n.jsxs)(s.p,{children:["You can clean up any of the clusters in the ",(0,n.jsx)(s.code,{children:"ARRESTED"})," state with the following:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"aws emr-containers list-virtual-clusters --region us-west-2 --states ARRESTED \\\n--query 'virtualClusters[0].id' --output text | xargs -I{} aws emr-containers delete-virtual-cluster \\\n--region us-west-2 --id {}\n"})})]})}function u(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,s,r)=>{r.d(s,{Z:()=>l,a:()=>o});var n=r(7294);const t={},a=n.createContext(t);function o(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);