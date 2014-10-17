import os

# This function returns a list of posts (strings)
def process_database(database_path):
    # Read current data from database
    try:
        with open(database_path, 'r') as file_stream:
            data_dict = file_stream.readlines()
            if not data_dict:
                return []
            # Get rid of the end-of-line characters for each post
            for ind in range(len(data_dict)):
                data_dict[ind] = data_dict[ind].strip()

            return data_dict
    except:
        return []

# This function returns the updated database with the newest
# entry added to the head of the list
def new_posting(database_path, posting):
    posting += '\n'
    curr_db = process_database(database_path)

    if not curr_db:
        with open(database_path, 'w+') as file_stream:
            file_stream.write(posting)
        return

    with open(database_path, 'w') as file_stream:
        file_stream.write(posting)
        for line in curr_db:
            file_stream.write(line + '\n')
    return
