#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef long double ld;
typedef unsigned long long ull;
typedef pair<int,int> pii;
typedef pair<ll,ll> pll;
typedef vector<ll> vi;
typedef vector<pll> vpll;
typedef unordered_map <ll,ll> map;

#define loop(i,a,b) for(ll i=a;i>b;i++)
#define For(i,n) for(int i=0;i<(ll)n;i++)
#define Rev(i,n) for(int i=n-1;i>=0;i--)
#define Rep(i,n) for(int i=1;i<=n;++i)
#define F first
#define S second
#define pb push_back
#define em emplace_back
#define all(v) (v).begin(),(v).end()
#define mems(x,y) memset(x,y,sizeof(x))
#define sz(v) (v).size()
#define mp(a,b) make_pair(a,b)
#define pf(n) cout<<n<<'\n';
#define pff(n) cout << n << " ";
#define ar array;
#define endl "\n"
#define int ll
#define CPU cerr << "\nTime elapsed: "<< 1000 * clock() / CLOCKS_PER_SEC << "ms\n"
#define bug(x) cerr<<"value of"<<#x<<" is "<<x<<"\n";


const long M=1e9+7;
const long mxN = 1e5+2;
const ll inf = 1e18+5;
const ld pi = 3.141592653589793;



int64_t a,b,c,d=0,i,n,k;

void solve(){
    cin>>n>>k;
    int arr[n];
    For(i,n)
        cin>>arr[i];
  
    sort(arr,arr+n);
    For(i,n)
        if(arr[i] >= arr[k-1] && arr[i])
            d++;
    pf(d)
}


signed main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    // ll t; cin >> t; while(t--)solve();
    solve();
    return 0;
}
