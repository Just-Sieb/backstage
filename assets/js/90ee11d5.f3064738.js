/*! For license information please see 90ee11d5.f3064738.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[664997],{491931:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=r(824246),i=r(511151);const s={id:"integration",title:"@backstage/integration",description:"API Reference for @backstage/integration"},c=void 0,o={unversionedId:"reference/integration",id:"reference/integration",title:"@backstage/integration",description:"API Reference for @backstage/integration",source:"@site/../docs/reference/integration.md",sourceDirName:"reference",slug:"/reference/integration",permalink:"/docs/reference/integration",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/integration.md",tags:[],version:"current",frontMatter:{id:"integration",title:"@backstage/integration",description:"API Reference for @backstage/integration"}},a={},d=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function l(e){const n=Object.assign({p:"p",a:"a",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/integration",children:(0,t.jsx)(n.code,{children:"@backstage/integration"})})]}),"\n",(0,t.jsx)(n.p,{children:"Helpers for managing integrations towards external systems"}),"\n",(0,t.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Class"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.awss3integration",children:"AwsS3Integration"})}),(0,t.jsx)(n.td,{children:"Integrates with AWS S3 or compatible solutions."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.azureintegration",children:"AzureIntegration"})}),(0,t.jsx)(n.td,{children:"Microsoft Azure based integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.bitbucketcloudintegration",children:"BitbucketCloudIntegration"})}),(0,t.jsx)(n.td,{children:"A Bitbucket Cloud based integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.bitbucketintegration",children:"BitbucketIntegration"})}),(0,t.jsx)(n.td,{children:"A Bitbucket based integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.bitbucketserverintegration",children:"BitbucketServerIntegration"})}),(0,t.jsx)(n.td,{children:"A Bitbucket Server based integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.defaultgithubcredentialsprovider",children:"DefaultGithubCredentialsProvider"})}),(0,t.jsx)(n.td,{children:"Handles the creation and caching of credentials for GitHub integrations."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.defaultgitlabcredentialsprovider",children:"DefaultGitlabCredentialsProvider"})}),(0,t.jsx)(n.td,{children:"Handles the creation and caching of credentials for GitLab integrations."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.gerritintegration",children:"GerritIntegration"})}),(0,t.jsx)(n.td,{children:"A Gerrit based integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.giteaintegration",children:"GiteaIntegration"})}),(0,t.jsx)(n.td,{children:"A Gitea based integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.githubappcredentialsmux",children:"GithubAppCredentialsMux"})}),(0,t.jsx)(n.td,{children:"Corresponds to a Github installation which internally could hold several GitHub Apps."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.githubintegration",children:"GithubIntegration"})}),(0,t.jsx)(n.td,{children:"A GitHub based integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.githubintegration",children:"GitHubIntegration"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.gitlabintegration",children:"GitLabIntegration"})}),(0,t.jsx)(n.td,{children:"A GitLab based integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.scmintegrations",children:"ScmIntegrations"})}),(0,t.jsx)(n.td,{children:"Exposes the set of supported integrations."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.singleinstancegithubcredentialsprovider",children:"SingleInstanceGithubCredentialsProvider"})}),(0,t.jsx)(n.td,{children:"Handles the creation and caching of credentials for GitHub integrations."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Function"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.buildgerritgitilesarchiveurl",children:"buildGerritGitilesArchiveUrl(config, project, branch, filePath)"})}),(0,t.jsx)(n.td,{children:"Build a Gerrit Gitiles archive url that targets a specific branch and path"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.defaultscmresolveurl",children:"defaultScmResolveUrl(options)"})}),(0,t.jsxs)(n.td,{children:["Default implementation of ",(0,t.jsx)(n.a,{href:"/docs/reference/integration.scmintegration",children:"ScmIntegration"})," ",(0,t.jsx)(n.code,{children:"resolveUrl"}),", that only works with URL pathname based providers."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getazurecommitsurl",children:"getAzureCommitsUrl(url)"})}),(0,t.jsx)(n.td,{children:"Given a URL, return the API URL to fetch commits on the branch."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getazuredownloadurl",children:"getAzureDownloadUrl(url)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a path on a provider, returns a URL that is suitable for downloading the subtree."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getazurefilefetchurl",children:"getAzureFileFetchUrl(url)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a file on a provider, returns a URL that is suitable for fetching the contents of the data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getazurerequestoptions",children:"getAzureRequestOptions(config, additionalHeaders)"})}),(0,t.jsx)(n.td,{children:"Gets the request options necessary to make requests to a given provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketclouddefaultbranch",children:"getBitbucketCloudDefaultBranch(url, config)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a path on a provider, returns the default branch."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketclouddownloadurl",children:"getBitbucketCloudDownloadUrl(url, config)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a path on a provider, returns a URL that is suitable for downloading the subtree."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketcloudfilefetchurl",children:"getBitbucketCloudFileFetchUrl(url, config)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a file on a provider, returns a URL that is suitable for fetching the contents of the data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketcloudrequestoptions",children:"getBitbucketCloudRequestOptions(config)"})}),(0,t.jsx)(n.td,{children:"Gets the request options necessary to make requests to a given provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketdefaultbranch",children:"getBitbucketDefaultBranch(url, config)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a path on a provider, returns the default branch."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketdownloadurl",children:"getBitbucketDownloadUrl(url, config)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a path on a provider, returns a URL that is suitable for downloading the subtree."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketfilefetchurl",children:"getBitbucketFileFetchUrl(url, config)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a file on a provider, returns a URL that is suitable for fetching the contents of the data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketrequestoptions",children:"getBitbucketRequestOptions(config)"})}),(0,t.jsx)(n.td,{children:"Gets the request options necessary to make requests to a given provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketserverdefaultbranch",children:"getBitbucketServerDefaultBranch(url, config)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a path on a provider, returns the default branch."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketserverdownloadurl",children:"getBitbucketServerDownloadUrl(url, config)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a path on a provider, returns a URL that is suitable for downloading the subtree."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketserverfilefetchurl",children:"getBitbucketServerFileFetchUrl(url, config)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a file on a provider, returns a URL that is suitable for fetching the contents of the data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketserverrequestoptions",children:"getBitbucketServerRequestOptions(config)"})}),(0,t.jsx)(n.td,{children:"Gets the request options necessary to make requests to a given provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgerritbranchapiurl",children:"getGerritBranchApiUrl(config, url)"})}),(0,t.jsx)(n.td,{children:"Return the url to get branch info from the Gerrit API."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgerritclonerepourl",children:"getGerritCloneRepoUrl(config, url)"})}),(0,t.jsx)(n.td,{children:"Return the url to clone the repo that is referenced by the url."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgerritfilecontentsapiurl",children:"getGerritFileContentsApiUrl(config, url)"})}),(0,t.jsx)(n.td,{children:"Return the url to fetch the contents of a file using the Gerrit API."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgerritprojectsapiurl",children:"getGerritProjectsApiUrl(config)"})}),(0,t.jsx)(n.td,{children:"Return the url to query available projects using the Gerrit API."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgerritrequestoptions",children:"getGerritRequestOptions(config)"})}),(0,t.jsx)(n.td,{children:"Return request headers for a Gerrit provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgiteafilecontentsurl",children:"getGiteaFileContentsUrl(config, url)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a file, returns an api URL for fetching the contents of the data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgitearequestoptions",children:"getGiteaRequestOptions(config)"})}),(0,t.jsx)(n.td,{children:"Return request headers for a Gitea provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgithubfilefetchurl",children:"getGithubFileFetchUrl(url, config, credentials)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a file on a provider, returns a URL that is suitable for fetching the contents of the data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgithubrequestoptions",children:"getGitHubRequestOptions(config, credentials)"})}),(0,t.jsx)(n.td,{children:"Gets the request options necessary to make requests to a given provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgitlabfilefetchurl",children:"getGitLabFileFetchUrl(url, config)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a file on a provider, returns a URL that is suitable for fetching the contents of the data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgitlabintegrationrelativepath",children:"getGitLabIntegrationRelativePath(config)"})}),(0,t.jsx)(n.td,{children:"Reads a GitLab integration config, and returns relative path."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgitlabrequestoptions",children:"getGitLabRequestOptions(config)"})}),(0,t.jsx)(n.td,{children:"Gets the request options necessary to make requests to a given provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.parsegerritgitilesurl",children:"parseGerritGitilesUrl(config, url)"})}),(0,t.jsx)(n.td,{children:"Parse a Gitiles URL and return branch, file path and project."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.parsegerritjsonresponse",children:"parseGerritJsonResponse(response)"})}),(0,t.jsx)(n.td,{children:"Parse the json response from Gerrit and strip the magic prefix."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readawss3integrationconfig",children:"readAwsS3IntegrationConfig(config)"})}),(0,t.jsx)(n.td,{children:"Reads a single Aws S3 integration config."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readawss3integrationconfigs",children:"readAwsS3IntegrationConfigs(configs)"})}),(0,t.jsx)(n.td,{children:"Reads a set of AWS S3 integration configs, and inserts some defaults for public Amazon AWS if not specified."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readazureintegrationconfig",children:"readAzureIntegrationConfig(config)"})}),(0,t.jsx)(n.td,{children:"Reads a single Azure integration config."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readazureintegrationconfigs",children:"readAzureIntegrationConfigs(configs)"})}),(0,t.jsx)(n.td,{children:"Reads a set of Azure integration configs, and inserts some defaults for public Azure if not specified."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readbitbucketcloudintegrationconfig",children:"readBitbucketCloudIntegrationConfig(config)"})}),(0,t.jsx)(n.td,{children:"Reads a single Bitbucket Cloud integration config."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readbitbucketcloudintegrationconfigs",children:"readBitbucketCloudIntegrationConfigs(configs)"})}),(0,t.jsx)(n.td,{children:"Reads a set of Bitbucket Cloud integration configs, and inserts one for public Bitbucket Cloud if none specified."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readbitbucketintegrationconfig",children:"readBitbucketIntegrationConfig(config)"})}),(0,t.jsx)(n.td,{children:"Reads a single Bitbucket integration config."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readbitbucketintegrationconfigs",children:"readBitbucketIntegrationConfigs(configs)"})}),(0,t.jsx)(n.td,{children:"Reads a set of Bitbucket integration configs, and inserts some defaults for public Bitbucket if not specified."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readbitbucketserverintegrationconfig",children:"readBitbucketServerIntegrationConfig(config)"})}),(0,t.jsx)(n.td,{children:"Reads a single Bitbucket Server integration config."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readbitbucketserverintegrationconfigs",children:"readBitbucketServerIntegrationConfigs(configs)"})}),(0,t.jsx)(n.td,{children:"Reads a set of Bitbucket Server integration configs."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readgerritintegrationconfig",children:"readGerritIntegrationConfig(config)"})}),(0,t.jsx)(n.td,{children:"Reads a single Gerrit integration config."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readgerritintegrationconfigs",children:"readGerritIntegrationConfigs(configs)"})}),(0,t.jsx)(n.td,{children:"Reads a set of Gerrit integration configs."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readgiteaconfig",children:"readGiteaConfig(config)"})}),(0,t.jsx)(n.td,{children:"Parses a location config block for use in GiteaIntegration"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readgithubintegrationconfig",children:"readGithubIntegrationConfig(config)"})}),(0,t.jsx)(n.td,{children:"Reads a single GitHub integration config."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readgithubintegrationconfigs",children:"readGithubIntegrationConfigs(configs)"})}),(0,t.jsx)(n.td,{children:"Reads a set of GitHub integration configs, and inserts some defaults for public GitHub if not specified."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readgitlabintegrationconfig",children:"readGitLabIntegrationConfig(config)"})}),(0,t.jsx)(n.td,{children:"Reads a single GitLab integration config."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readgitlabintegrationconfigs",children:"readGitLabIntegrationConfigs(configs)"})}),(0,t.jsx)(n.td,{children:"Reads a set of GitLab integration configs, and inserts some defaults for public GitLab if not specified."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readgooglegcsintegrationconfig",children:"readGoogleGcsIntegrationConfig(config)"})}),(0,t.jsx)(n.td,{children:"Reads a single Google GCS integration config."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.replacegithuburltype",children:"replaceGithubUrlType(url, type)"})}),(0,t.jsx)(n.td,{children:"Takes a GitHub URL and replaces the type part (blob, tree etc)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.replacegitlaburltype",children:"replaceGitLabUrlType(url, type)"})}),(0,t.jsx)(n.td,{children:"Takes a GitLab URL and replaces the type part (blob, tree etc)."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Interface"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.githubcredentialsprovider",children:"GithubCredentialsProvider"})}),(0,t.jsx)(n.td,{children:"This allows implementations to be provided to retrieve GitHub credentials."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.gitlabcredentialsprovider",children:"GitlabCredentialsProvider"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.integrationsbytype",children:"IntegrationsByType"})}),(0,t.jsx)(n.td,{children:"The set of supported integrations."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.scmintegration",children:"ScmIntegration"})}),(0,t.jsx)(n.td,{children:"Encapsulates a single SCM integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"})}),(0,t.jsx)(n.td,{children:"Holds all registered SCM integrations, of all types."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.scmintegrationsgroup",children:"ScmIntegrationsGroup"})}),(0,t.jsx)(n.td,{children:"Encapsulates several integrations, that are all of the same type."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgithubfilefetchurl",children:"getGitHubFileFetchUrl"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readgithubintegrationconfig",children:"readGitHubIntegrationConfig"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readgithubintegrationconfigs",children:"readGitHubIntegrationConfigs"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.replacegithuburltype",children:"replaceGitHubUrlType"})}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type Alias"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.awss3integrationconfig",children:"AwsS3IntegrationConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for a single AWS S3 provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.azureclientsecretcredential",children:"AzureClientSecretCredential"})}),(0,t.jsx)(n.td,{children:"Authenticate using a client secret that was generated for an App Registration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.azurecredential",children:"AzureCredential"})}),(0,t.jsx)(n.td,{children:"Credential used to authenticate to Azure Active Directory."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.azureintegrationconfig",children:"AzureIntegrationConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for a single Azure provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.azuremanagedidentitycredential",children:"AzureManagedIdentityCredential"})}),(0,t.jsx)(n.td,{children:"Authenticate using a managed identity available at the deployment environment."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.bitbucketcloudintegrationconfig",children:"BitbucketCloudIntegrationConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for a single Bitbucket Cloud API provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.bitbucketintegrationconfig",children:"BitbucketIntegrationConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for a single Bitbucket API provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.bitbucketserverintegrationconfig",children:"BitbucketServerIntegrationConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for a single Bitbucket Server API provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.gerritintegrationconfig",children:"GerritIntegrationConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for a single Gerrit API provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.giteaintegrationconfig",children:"GiteaIntegrationConfig"})}),(0,t.jsx)(n.td,{children:"The configuration for a single Gitea integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.githubappconfig",children:"GithubAppConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for authenticating a GitHub Application."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.githubcredentials",children:"GithubCredentials"})}),(0,t.jsx)(n.td,{children:"A set of credentials information for a GitHub integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.githubcredentialtype",children:"GithubCredentialType"})}),(0,t.jsx)(n.td,{children:"The type of credentials produced by the credential provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.githubintegrationconfig",children:"GithubIntegrationConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for a single GitHub integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.githubintegrationconfig",children:"GitHubIntegrationConfig"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.gitlabcredentials",children:"GitlabCredentials"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.gitlabintegrationconfig",children:"GitLabIntegrationConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for a single GitLab integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.googlegcsintegrationconfig",children:"GoogleGcsIntegrationConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for a single Google Cloud Storage provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.scmintegrationsfactory",children:"ScmIntegrationsFactory"})}),(0,t.jsx)(n.td,{children:"A factory function that creates an integration group based on configuration."})]})]})]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var s,c,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var d in s=Object(arguments[a]))r.call(s,d)&&(o[d]=s[d]);if(n){c=n(s);for(var l=0;l<c.length;l++)t.call(s,c[l])&&(o[c[l]]=s[c[l]])}}return o}},371426:(e,n,r)=>{r(862525);var t=r(827378),i=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;i=s("react.element"),n.Fragment=s("react.fragment")}var c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,s={},d=null,l=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,t)&&!a.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:i,type:e,key:d,ref:l,props:s,_owner:c.current}}n.jsx=d,n.jsxs=d},541535:(e,n,r)=>{var t=r(862525),i=60103,s=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var c=60109,o=60110,a=60112;n.Suspense=60113;var d=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var h=Symbol.for;i=h("react.element"),s=h("react.portal"),n.Fragment=h("react.fragment"),n.StrictMode=h("react.strict_mode"),n.Profiler=h("react.profiler"),c=h("react.provider"),o=h("react.context"),a=h("react.forward_ref"),n.Suspense=h("react.suspense"),d=h("react.memo"),l=h("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function x(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||u}function p(){}function b(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||u}x.prototype.isReactComponent={},x.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,n,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},p.prototype=x.prototype;var v=b.prototype=new p;v.constructor=b,t(v,x.prototype),v.isPureReactComponent=!0;var y={current:null},m=Object.prototype.hasOwnProperty,G={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,r){var t,s={},c=null,o=null;if(null!=n)for(t in void 0!==n.ref&&(o=n.ref),void 0!==n.key&&(c=""+n.key),n)m.call(n,t)&&!G.hasOwnProperty(t)&&(s[t]=n[t]);var a=arguments.length-2;if(1===a)s.children=r;else if(1<a){for(var d=Array(a),l=0;l<a;l++)d[l]=arguments[l+2];s.children=d}if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===s[t]&&(s[t]=a[t]);return{$$typeof:i,type:e,key:c,ref:o,props:s,_owner:y.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var R=/\/+/g;function I(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function A(e,n,r,t,c){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case s:a=!0}}if(a)return c=c(a=e),e=""===t?"."+I(a,0):t,Array.isArray(c)?(r="",null!=e&&(r=e.replace(R,"$&/")+"/"),A(c,n,r,"",(function(e){return e}))):null!=c&&(C(c)&&(c=function(e,n){return{$$typeof:i,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(R,"$&/")+"/")+e)),n.push(c)),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var d=0;d<e.length;d++){var l=t+I(o=e[d],d);a+=A(o,n,r,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),d=0;!(o=e.next()).done;)a+=A(o=o.value,n,r,l=t+I(o,d++),c);else if("object"===o)throw n=""+e,Error(g(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return a}function S(e,n,r){if(null==e)return e;var t=[],i=0;return A(e,t,"","",(function(e){return n.call(r,e,i++)})),t}function w(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var U={current:null};function _(){var e=U.current;if(null===e)throw Error(g(321));return e}var L={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:y,IsSomeRendererActing:{current:!1},assign:t};n.Children={map:S,forEach:function(e,n,r){S(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return S(e,(function(){n++})),n},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error(g(143));return e}},n.Component=x,n.PureComponent=b,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,n.cloneElement=function(e,n,r){if(null==e)throw Error(g(267,e));var s=t({},e.props),c=e.key,o=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(o=n.ref,a=y.current),void 0!==n.key&&(c=""+n.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(l in n)m.call(n,l)&&!G.hasOwnProperty(l)&&(s[l]=void 0===n[l]&&void 0!==d?d[l]:n[l])}var l=arguments.length-2;if(1===l)s.children=r;else if(1<l){d=Array(l);for(var h=0;h<l;h++)d[h]=arguments[h+2];s.children=d}return{$$typeof:i,type:e.type,key:c,ref:o,props:s,_owner:a}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:o,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:a,render:e}},n.isValidElement=C,n.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:w}},n.memo=function(e,n){return{$$typeof:d,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return _().useCallback(e,n)},n.useContext=function(e,n){return _().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return _().useEffect(e,n)},n.useImperativeHandle=function(e,n,r){return _().useImperativeHandle(e,n,r)},n.useLayoutEffect=function(e,n){return _().useLayoutEffect(e,n)},n.useMemo=function(e,n){return _().useMemo(e,n)},n.useReducer=function(e,n,r){return _().useReducer(e,n,r)},n.useRef=function(e){return _().useRef(e)},n.useState=function(e){return _().useState(e)},n.version="17.0.2"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Zo:()=>o,ah:()=>s});var t=r(667294);const i=t.createContext({});function s(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function o({components:e,children:n,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||c:s(e),t.createElement(i.Provider,{value:o},n)}}}]);