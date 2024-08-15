#RULE: make sure branch name follow format [PROJECT]-[ticket_number]
branch = "#{github.branch_for_head}"
if branch !~ /^([A-Z]+)-(\d+)/
    fail ("Hello @#{github.pr_author}, branch name must follow the defined format `[PROJECT]-[ticket_number]`, eg: SHOP-123 or LOYAL-321")
end
#RULE: check if commit message follows the format "[PROJECT]-[ticket_number]: [description]"
for commit in git.commits do
    if commit.message !~ /^#{branch}:\s(.)*/
        message "base_commit: #{github.base_commit}, head_commit: #{github.head_commit}"
        fail ("Hello @#{github.pr_author}, commit message \"#{commit.message}\" must follow the defined format \"#{branch}: [description]\"")
        break
    end
end